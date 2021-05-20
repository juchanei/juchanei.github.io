import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import Page from '@/pages/Page'

interface ArticlesPageProps extends PageProps {
    data: {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        id: string
                        frontmatter: {
                            slug: string
                            title: string
                            date: Date
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
}) => (
    <Page title="Articles">
        {edges
            .filter((edge) => !!edge.node.frontmatter.date)
            .map((edge) => (
                <div key={edge.node.id}>
                    <Link to={edge.node.frontmatter.slug}>
                        <div style={{ display: 'flex' }}>
                            {edge.node.frontmatter.title}
                            <time
                                style={{
                                    marginLeft: 'auto',
                                    fontSize: 'smaller',
                                }}
                            >
                                {edge.node.frontmatter.date}
                            </time>
                        </div>
                    </Link>
                </div>
            ))}
    </Page>
)

export default ArticlesPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`
