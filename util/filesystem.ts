import fs from 'fs'
import matter from 'gray-matter'

export function getArticle(slug: string) {
    const file = fs.readFileSync(`juchanei.github.io.wiki/${slug}.md`, 'utf-8')
    const metadataAndContent = matter(file)

    const { title, date, tags } = metadataAndContent.data

    return {
        slug,
        title,
        date: new Date(date),
        tags,
        markdown: metadataAndContent.content,
    }
}

export function getArticleSlugs() {
    return fs.readdirSync('juchanei.github.io.wiki')
        .filter((filename) => filename !== 'Home.md' && !filename.startsWith('?') && filename.endsWith('.md'))
        .map((filename) => filename.replace('.md', ''))
}
