const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const result = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    clearImages();
    makeImages(result.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    const main = document.querySelector('main');
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            main.append(img);
        }
    }
}

function clearImages() {
    const images = document.querySelectorAll('img');
    for (let image of images) image.remove();
}