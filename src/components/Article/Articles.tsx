import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface ArticlesProps {
    articles: Array<{
        id: string
        date: Date
        path: string
        title: string
    }>
}

const ArticleLinks = styled.ol`
    padding: 0;
    margin: 0;
    list-style-type: none;
`

const ArticleLink = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;

    & > a {
        width: 500px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: auto;
    }

    & > time {
        font-size: smaller;
    }
`

const Articles: React.FC<ArticlesProps> = ({ articles }) => (
    <ArticleLinks>
        {articles.map(article => (
            <ArticleLink key={article.id}>
                <Link to={article.path}>{article.title}</Link>
                <time>{article.date}</time>
            </ArticleLink>
        ))}
    </ArticleLinks>
)

export default Articles
