import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '@/components/Base/Layout'
import Article from '@/components/Article'

interface ArticlePageProps extends PageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string
                date: Date
                tags: string[]
            }
            html: string
        }
    }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark

    return (
        <Layout>
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

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                tags
            }
        }
    }
`
