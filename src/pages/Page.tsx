import React from 'react'
import Helmet from 'react-helmet'
import Layout from '@/components/Base/Layout'

interface BasePageProps {
    title?: string
}

const Page: React.FC<BasePageProps> = ({ title, children }) => (
    <>
        <Helmet>
            <title>{title ? `${title} | ` : ''}juchanei&apos;s blog</title>
        </Helmet>
        <Layout>{children}</Layout>
    </>
)

export default Page
