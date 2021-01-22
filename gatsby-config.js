module.exports = {
    // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
    // don't need to define it here (just if you need to change the options)
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: `${__dirname}/contents`,
            },
        },
        'gatsby-transformer-remark',
    ],
};
