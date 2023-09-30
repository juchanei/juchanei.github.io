import LayoutComponent, { NavLinkOption } from '@/components/Layout'
import Script from 'next/script'

const links: NavLinkOption[] = [
    { path: '/about', name: 'about' },
    { path: '/articles', name: 'articles' },
    {
        path: 'https://github.com/juchanei',
        name: 'github',
        target: 'blank',
    },
]

interface LayoutProps {
    title?: string
    description?: string
    pathname?: string
    children: React.ReactNode
}

function CustomHead({ title, description, pathname }: { title?: string, description?: string, pathname?: string }) {
    const pageUrl = `https://juchanei.github.io${pathname || ''}`
    const blogTitle = 'juchanei'
    const pageTitle = title ? `${title} | ${blogTitle}` : blogTitle
    const imageUrl = '/logo_transparent.png'

    return (
        <head>
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
            <meta
                name='google-site-verification'
                content='zMe30NikxkVrHQc8KL1LeFDlYRx13BypWzaXpglLe3Q'
            />
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-light.min.css'
            />
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css'
                media='screen and (prefers-color-scheme: dark)'
            />
        </head>
    )
}

export default function RootLayout({ title, description, pathname, children }: LayoutProps) {
    return (
        <html lang='ko'>
            <CustomHead title={title} description={description} pathname={pathname} />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-JRWY82TBQY"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-JRWY82TBQY');
                `}
            </Script>
            <body>
                <LayoutComponent links={links}>
                    {children}
                </LayoutComponent>
            </body>
        </html>
    )
}
