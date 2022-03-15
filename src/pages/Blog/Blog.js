import React from "react";
import { useParams } from "react-router-dom";
import posts from '../data/posts.json';

function BlogPage() {
    const { id } = useParams();

    const matchedId = posts.find((post) => {
        return post.id === id;
    });

    return (
        <>
            <h2>Blog: {matchedId.id}</h2>
            <h4>{matchedId.title}</h4>
            <p>{matchedId.content}</p>
        </>
    );
}

export default BlogPage;