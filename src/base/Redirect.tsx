import Layout from '@/base/Layout'
import React, { useEffect } from 'react'

interface RedirectProps {
    href: string
}

const Redirect: React.FC<RedirectProps> = ({ href }) => {
    useEffect(() => {
        window.location.href = href
    }, [])

    return <Layout title='' description='' />
}

export default Redirect
