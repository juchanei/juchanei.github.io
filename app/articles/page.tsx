import ArticlesComponent from "@/components/Articles"
import { getArticle, getArticleSlugs } from "@/util/filesystem"

export default function Articles() {
    const articles = getArticleSlugs()
        .map(slug => getArticle(slug))
        .sort((a, b) => b.date.getTime() - a.date.getTime())

    return <ArticlesComponent articles={articles} />
}
