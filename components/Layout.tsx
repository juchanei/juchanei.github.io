import Link from 'next/link'
import styles from './Layout.module.css'
import './globals.css'

export interface NavLinkOption {
    path: string
    name: string
    target?: string
}

export default function Layout({ links, children }: { links: NavLinkOption[], children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <header>
                <Link className={styles.logo} href='/'>juchanei</Link>
                <nav>
                    <ul>
                        {links.map(({ path, name, target }) => (
                            <li key={path}>
                                <Link href={path} target={target}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <article>
                {children}
            </article>
            <footer>
                <span>
                    Github (<a href='https://github.com/juchanei'>@juchanei</a>)
                </span>
            </footer>
        </main>
    )
}
