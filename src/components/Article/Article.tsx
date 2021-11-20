import React from 'react'

interface BlogProps {
    title: string
    date: Date
    tags: string[]
    html: string
}

const Article: React.FC<BlogProps> = ({ title, date, tags, html }) => (
    <div className='blog-post-container'>
        <div className='blog-post'>
            <h1>{title}</h1>
            <div style={{ display: 'flex' }}>
                <time style={{ fontSize: 'smaller' }}>{date}</time>
                <em style={{ marginLeft: 'auto', fontSize: 'smaller' }}>
                    {tags.map(tag => `#${tag}`).join(' ')}
                </em>
            </div>
            <hr style={{ marginBottom: '50px' }} />
            <div
                className='blog-post-content'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </div>
)

export default Article
