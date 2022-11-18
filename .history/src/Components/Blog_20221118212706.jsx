import React, { useEffect, useState } from 'react';
import SBlog from './SBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://newserver-anitaakter.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                {
                    blogs.map(blog => <SBlog key={blog._id} blog={blog}></SBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;