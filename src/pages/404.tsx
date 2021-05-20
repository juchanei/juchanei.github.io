import React from 'react'
import { PageProps } from 'gatsby'
import Page from '@/pages/Page'

const NotFound: React.FC<PageProps> = () => (
    <Page title="404">
        <p>Sorry, page not found!</p>
    </Page>
)

export default NotFound
