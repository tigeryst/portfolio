import axios from 'axios';
import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
	const [username, setUsername] = useState('');
	const [commentText, setCommentText] = useState('');

	const addComment = async () => {
		console.log({ username, text: commentText });
		const response = await axios.post(
			`/api/articles/${articleName}/add-comment`,
			{ username, text: commentText }
		);
		const data = response.data;
		console.log(data);
		setArticleInfo(data);
		setUsername('');
		setCommentText('');
	};

	return (
		<>
			<h3>Add a Comment</h3>
			<label>
				Name:
				<input
					type='text'
					value={username}
					onChange={event => setUsername(event.target.value)}
				/>
			</label>
			<label>
				Comment:
				<textarea
					cols='50'
					rows='4'
					value={commentText}
					onChange={event => setCommentText(event.target.value)}
				/>
			</label>
			<button onClick={() => addComment()}>Add Comment</button>
		</>
	);
};

export default AddCommentForm;
