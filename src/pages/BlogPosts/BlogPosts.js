import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function BlogPostsPage() {
    console.log(posts);

    const listTitles = posts.map((post) =>
        <li key={post.id}>
            <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
        </li>
    );

    return (
        <>
            <h2>Blogpost Overzicht</h2>
            <h4>Totaal aantal posts: {posts.length}</h4>
            <ul>
                {listTitles}
            </ul>
        </>
    );
}

export default BlogPostsPage;