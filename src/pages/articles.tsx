import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout from '@/base/Layout'
import Articles from '@/components/Article/Articles'

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

interface ArticlesPageProps extends PageProps {
    data: {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        id: string
                        frontmatter: {
                            title: string
                            date: Date
                        }
                        fields: {
                            slug: string
                        }
                    }
                },
            ]
        }
    }
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const articles = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => ({
            id: edge.node.id,
            slug: edge.node.fields.slug,
            date: edge.node.frontmatter.date,
            title: edge.node.frontmatter.title,
        }))

    return (
        <Layout title='' description=''>
            <Articles articles={articles} />
        </Layout>
    )
}

export default ArticlesPage
