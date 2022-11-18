import React from 'react';

const SBlog = ({ blog }) => {
    return (
        <div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{blog.title}</a>
                    <p className="mt-2">{blog.details}.</p>
                </div>

            </div>
        </div>
    );
};

export default SBlog;