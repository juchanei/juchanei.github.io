import React from 'react'
import { PageProps } from 'gatsby'
import About from '@/components/About'
import Page from '@/base/Page'

const AboutPage: React.FC<PageProps> = () => (
    <Page title="About">
        <About />
    </Page>
)

export default AboutPage
