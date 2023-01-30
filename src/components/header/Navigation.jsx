import { getCollection } from 'astro:content';
const mdx = await getCollection('blog');
console.log(mdx);


export function Nav() {
    return (
    <nav class="hidden lg:flex justify-between items-center w-[500px] h-[40px]">
        { mdx.sort((a, b) => {
            return (a.data.position || 0) - (b.data.position || 0);
        }).map( (entry) => {
            return <Anchor href={entry.slug}>{entry.data.title}</Anchor> 
        } )}
    </nav>
    );
}