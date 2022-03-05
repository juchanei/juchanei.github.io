const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, trailingSlash: false })
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve('./src/templates/article.tsx')
    const result = await graphql(`
        query {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        excerpt(format: PLAIN)
                        headings {
                            depth
                            value
                        }
                        tableOfContents(maxDepth: 3)
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/articles${node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: node.fields.slug,
            },
        })
    })
}
