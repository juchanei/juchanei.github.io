import React from 'react';

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

const Layout: React.FC = ({ children }) => (
    <main>
        <h1>juchanei&apos;s blog</h1>
        <header>
            <ul>
                {links.map(({ path, name, target }) => (
                    <li>
                        <a href={path} target={target}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
        <article>{children}</article>
        <footer>
            <GithubLink githubId="juchanei" />
        </footer>
    </main>
);

export default Layout;
