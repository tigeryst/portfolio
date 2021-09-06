const Campground = require('../models/campground');
const {
  cloudinary
} = require('../cloudinary');

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({
  accessToken: mapBoxToken
});

module.exports.index = async (req, res, next) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', {
    campgrounds
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render('campgrounds/new');
};

module.exports.createCampground = async (req, res, next) => {
  const geoData = await geocoder
    .forwardGeocode({
      query: req.body.campground.location,
      limit: 1,
    })
    .send();

  const campground = new Campground(req.body.campground);
  campground.images = req.files.map((f) => ({
    filename: f.filename,
    url: f.path,
  }));
  campground.geometry = geoData.body.features[0].geometry;
  campground.author = req.user;

  await campground.save();
  req.flash('success', 'Successfully made a new campground!');
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res, next) => {
  const {
    id
  } = req.params;
  const campground = await Campground.findById(id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author',
      },
    })
    .populate('author');
  if (!campground) {
    req.flash('error', 'Cannot find that campground!');
    return res.redirect('/campgrounds');
  }
  res.render('campgrounds/show', {
    campground
  });
};

module.exports.renderEditForm = async (req, res, next) => {
  const {
    id
  } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash('error', 'Cannot find that campground!');
    return res.redirect('/campgrounds');
  }

  res.render('campgrounds/edit', {
    campground
  });
};

module.exports.updateCampground = async (req, res, next) => {
  const {
    id
  } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const images = req.files.map((f) => ({
    filename: f.filename,
    url: f.path,
  }));
  campground.images.push(...images);
  await campground.save();
  console.log(req.body.deleteImages);
  if (req.body.deleteImages) {
    for (let filename of deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: {
        images: {
          filename: {
            $in: req.body.deleteImages
          }
        }
      },
    });
  }
  req.flash('success', 'Successfully updated campground!');
  res.redirect(`/campgrounds/${id}`);
};

module.exports.deleteCampground = async (req, res, next) => {
  const {
    id
  } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted campground');
  res.redirect('/campgrounds');
};