import React from 'react';
import axios from 'axios';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		const response = await axios.post(`/api/articles/${articleName}/upvote`);
		const data = response.data;
		setArticleInfo(data);
	};
	return (
		<>
			<button onClick={() => upvoteArticle()}>Add Upvote</button>
			<p>This post has been upvoted {upvotes} times</p>
		</>
	);
};

export default UpvotesSection;
