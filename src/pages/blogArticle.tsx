import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '@/components/Base/Layout';
import Blog from '@/components/Blog';

interface BlogProps extends PageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
                date: Date;
                tags: string[];
            };
            html: string;
        };
    };
}

const BlogArticle: React.FC<BlogProps> = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <Blog
                title={frontmatter.title}
                date={frontmatter.date}
                tags={frontmatter.tags}
                html={html}
            />
        </Layout>
    );
};

export default BlogArticle;

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
`;
