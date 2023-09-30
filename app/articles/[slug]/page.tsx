import ArticleComponent from '@/components/Article'
import { getArticle, getArticleSlugs } from '@/util/filesystem'
import { marked } from 'marked'

interface ArticleParams {
    slug: string
}

export default function Article({ params }: { params: ArticleParams }) {
    const { title, date, tags, markdown } = getArticle(params.slug)
    const html = marked(markdown)

    return <ArticleComponent title={title} date={date} tags={tags} html={html} />
}

export async function generateStaticParams() {
    return getArticleSlugs().map((slug) => ({ slug }))
}
