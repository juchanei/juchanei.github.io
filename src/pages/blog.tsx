import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/Base/Layout';
import Blog from '@/components/Blog';

const Home: React.FC<PageProps> = () => (
    <Layout>
        <Blog />
    </Layout>
);

export default Home;
