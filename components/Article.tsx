'use client'

import { formatDate } from '@/util/dateFormatter'
import hls from 'highlight.js'
import { useEffect } from 'react'
import styles from './Article.module.css'

export default function Article({ title, date, tags, html }: { title: string, date: Date, tags: string[], html: string }) {
    useEffect(() => hls.initHighlighting(), [html])

    return (
        <>
            <h1>{title}</h1>
            <div className={styles['title-subs']}>
                <div className={styles['tag-list']}>
                    {tags && tags.map((tag: string) => <em key={tag}>#{tag}</em>)}
                </div>
                <time>{formatDate(date)}</time>
            </div>
            <hr className={styles.bar} />
            <div
                className={styles['blog-post-content']}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </>
    )
}