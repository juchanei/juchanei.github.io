import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Article from '@/components/Article/Article'
import Layout from '@/base/Layout'

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
            fields {
                slug
            }
            excerpt
        }
    }
`

interface ArticlePageProps extends PageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string
                date: Date
                description: string
                tags: string[]
            }
            html: string
            excerpt: string
        }
    }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ data }) => {
    const { frontmatter, html, excerpt } = data.markdownRemark
    const description = frontmatter.description || excerpt

    return (
        <Layout title={frontmatter.title} description={description}>
            <Article
                title={frontmatter.title}
                date={frontmatter.date}
                tags={frontmatter.tags}
                html={html}
            />
        </Layout>
    )
}

export default ArticlePage
