import { formatDate } from "@/util/dateFormatter"
import Link from "next/link"
import styles from "./Articles.module.css"

export default function Articles({ articles }: { articles: { slug: string, title: string, date: Date }[] }) {
    return (
        <ol className={styles.links}>
            {articles.map((file) => (
                <li key={file.slug}>
                    <Link href={`/articles/${file.slug}`}>
                        {file.title}
                    </Link>
                    <time>{formatDate(file.date)}</time>
                </li>
            ))}
        </ol>
    )
}
