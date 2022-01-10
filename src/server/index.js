import express from "express";
import mongoose from "mongoose";
import Article from "./models/article.js";

const app = express();

app.use(express.static("dist"));

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/myBlog";

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  const articleInfo = await Article.findOne({ name: articleName });
  res.json(articleInfo);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const articleName = req.params.name;
  const article = await Article.findOne({ name: articleName });
  const { upvotes } = article;
  const updatedArticle = await Article.findOneAndUpdate(
    { name: articleName },
    { upvotes: upvotes + 1 },
    { new: true }
  );
  res.json(updatedArticle);
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  const articleName = req.params.name;
  const { username, text } = req.body;
  console.log(req.body);
  const article = await Article.findOne({ name: articleName });
  const { comments } = article;
  const updatedComments = comments.concat([{ username, text }]);
  const updatedArticle = await Article.findOneAndUpdate(
    { name: articleName },
    {
      comments: updatedComments,
    },
    { new: true }
  );
  res.json(updatedArticle);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}`)
);
