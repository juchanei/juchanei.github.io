import React from 'react';

import GithubLink from '@/components/Base/GithubLink';

const Layout: React.FC = ({ children }) => (
    <main>
        <h1>juchanei&apos;s blog</h1>
        <header>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="https://github.com/juchanei" target="blank">
                        Github
                    </a>
                </li>
            </ul>
        </header>
        <article>{children}</article>
        <footer>
            <GithubLink githubId="juchanei" />
        </footer>
    </main>
);

export default Layout;
