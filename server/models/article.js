import mongoose from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = new Schema(
	{
		username: String,
		text: String,
	},
	{ _id: false }
);

const ArticleSchema = new Schema({
	name: String,
	upvotes: Number,
	comments: {
		type: [CommentSchema],
		default: [],
	},
});

export default mongoose.model('Article', ArticleSchema);
