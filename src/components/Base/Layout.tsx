import React from 'react';
import styled from 'styled-components';

import GithubLink from '@/components/Base/GithubLink';

interface NavLinkOption {
    path: string;
    name: string;
    target?: string;
}

const links: NavLinkOption[] = [
    { path: '/about', name: 'About' },
    { path: '/articles', name: 'Articles' },
    {
        path: 'https://github.com/juchanei',
        name: 'Github',
        target: 'blank',
    },
];

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding-left: auto;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    padding: 0 calc(50vw - 512px);
`;

const Navigator = styled.nav`
    margin-left: auto;

    & a {
        margin: 10px;
        color: inherit;
    }

    & > ul {
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
`;

const Article = styled.article`
    margin-bottom: 100px;
    padding: 0 calc(50vw - 512px);
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    margin-top: auto;
    padding: 0 calc(50vw - 512px);
    color: lightgray;
    font-size: smaller;

    & a {
        color: inherit;
    }
`;

const Layout: React.FC = ({ children }) => (
    <Main>
        <Header>
            <h1>juchanei&apos;s blog</h1>
            <Navigator>
                <ul>
                    {links.map(({ path, name, target }) => (
                        <li>
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
            <GithubLink githubId="juchanei" />
        </Footer>
    </Main>
);

export default Layout;
