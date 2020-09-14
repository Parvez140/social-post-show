import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data));
    }, [])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])
    const cartStyle = {
        height: 500,width: 400,marginLeft:100,
    }

    return (
        <div style={cartStyle}>
            <p>Post : {postId}</p>
            <h3>{postDetail.title}</h3>
            <p>{postDetail.body}</p>
            <h3>Comments : </h3>
            <input type="text" placeholder=" Comments......" />
            {
                comments.map(comment => <div className="comments">
                    <h4> Name : {comment.name}</h4>
                    <h5>Comments : <br/>{comment.body}</h5>
                    </div> )
            }
        </div>
    );
};
export default PostDetails;