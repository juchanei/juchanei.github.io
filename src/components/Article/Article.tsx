import React from 'react';

interface BlogProps {
    title: string;
    date: Date;
    tags: string[];
    html: string;
}

// eslint-disable-next-line object-curly-newline
const Article: React.FC<BlogProps> = ({ title, date, tags, html }) => (
    <div className="blog-post-container">
        <div className="blog-post">
            <h1>{title}</h1>
            <h2>{date}</h2>
            <h2>{tags.map((tag) => `#${tag}`).join(' ')}</h2>
            <div
                className="blog-post-content"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </div>
);

export default Article;
