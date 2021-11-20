import React from 'react'
import styled from 'styled-components'
import GithubLink from '@/components/Base/GithubLink'
import { Helmet } from 'react-helmet'
import { useLocation } from '@gatsbyjs/reach-router'

const LAYOUT_WIDTH = 800
const LAYOUT_HORIZONTAL_PADDING = 20

interface NavLinkOption {
    path: string
    name: string
    target?: string
}

const links: NavLinkOption[] = [
    { path: '/about', name: 'About' },
    { path: '/articles', name: 'Articles' },
    {
        path: 'https://github.com/juchanei',
        name: 'Github',
        target: 'blank',
    },
]

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding-left: auto;
`

const Header = styled.header`
    display: flex;
    align-items: 'stretch';
    padding: 20px calc(50vw - ${LAYOUT_WIDTH / 2}px);

    @media (max-width: ${LAYOUT_WIDTH + LAYOUT_HORIZONTAL_PADDING * 2}px) {
        padding: 20px ${LAYOUT_HORIZONTAL_PADDING}px;
        flex-direction: column;
    }
`

const BlogTitle = styled.h1`
    font-size: 16px;
    margin: 0 auto 0 0;

    & > a {
        text-decoration: none;
    }
`

const Navigator = styled.nav`
    & a {
        margin: 0;
        color: inherit;
    }

    & > ul {
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;

        & > li {
            margin: 0 10px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
`

const Article = styled.article`
    padding: 80px calc(50vw - ${LAYOUT_WIDTH / 2}px);

    @media (max-width: ${LAYOUT_WIDTH + LAYOUT_HORIZONTAL_PADDING * 2}px) {
        padding: 20px ${LAYOUT_HORIZONTAL_PADDING}px;
    }
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    margin-top: auto;
    padding: 0 calc(50vw - ${LAYOUT_WIDTH / 2}px);
    color: lightgray;
    font-size: smaller;

    & a {
        color: inherit;
    }

    @media (max-width: ${LAYOUT_WIDTH + LAYOUT_HORIZONTAL_PADDING * 2}px) {
        padding: ${LAYOUT_HORIZONTAL_PADDING}px;
    }
`

interface LayoutProps {
    title: string
    description: string
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
    const { pathname } = useLocation()

    const pageUrl = `https://juchanei.github.io${pathname}`
    const blogTitle = "juchanei's blog"
    const pageTitle = title ? `${title} | ${blogTitle}` : blogTitle
    const imageUrl = '/logo.png'

    return (
        <Main>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name='description' content={description} />
                <meta property='og:site_name' content={blogTitle} />
                <meta property='og:type' content='blog' />
                <meta property='og:title' content={pageTitle} />
                <meta property='og:image' content={imageUrl} />
                <meta property='og:url' content={pageUrl} />
                <meta property='og:description' content={description} />
                <meta property='og:locale' content='ko_KR' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content={pageTitle} />
                <meta name='twitter:description' content={description} />
                <meta name='twitter:image' content={imageUrl} />
            </Helmet>
            <Header>
                <BlogTitle>
                    <a href='/'>{blogTitle}</a>
                </BlogTitle>
                <Navigator>
                    <ul>
                        {links.map(({ path, name, target }) => (
                            <li key={path}>
                                <a href={path} target={target}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Navigator>
            </Header>
            <Article>{children}</Article>
            <Footer>
                <GithubLink githubId='juchanei' />
            </Footer>
        </Main>
    )
}

export default Layout
