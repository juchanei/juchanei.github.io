import React from 'react'

interface Props {
    githubId: string
}

const GithubLink: React.FC<Props> = ({ githubId }) => (
    <span>
        Github (<a href={`https://github.com/${githubId}`}>@{githubId}</a>)
    </span>
)

export default GithubLink
