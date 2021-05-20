import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Base/Layout'
import About from '@/components/About'

const AboutPage: React.FC<PageProps> = () => (
    <Layout>
        <About />
    </Layout>
)

export default AboutPage
