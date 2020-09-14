import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => setPosts(post))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;