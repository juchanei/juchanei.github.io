import React from 'react'
import { PageProps } from 'gatsby'
import About from '@/components/About/About'
import Layout from '@/base/Layout'

const AboutPage: React.FC<PageProps> = () => (
    <Layout title='' description=''>
        <About />
    </Layout>
)

export default AboutPage
