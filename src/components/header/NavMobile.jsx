import { signal } from "@preact/signals";
import { getCollection } from 'astro:content';
import { Burger, Close } from '../../images/icons/Svg.jsx';
const mdx = await getCollection('blog');

const state = signal(0);

export function Menu() {

    return (
        <div class="flex lg:hidden justify-center items-center p-0 m-0 cursor-pointer" onClick={() => state.value ? state.value-- : state.value++}>
            <a class="w-[30px] h-[30px] pt-0.5">
                <Burger />
            </a>
        </div>
    );
}

export function Overlay() {

    const val = state.value ? "block" : "hidden";

    return (
        <div class={"fixed left-0 grid grid-rows-4 w-screen h-screen p-0 m-0 bg-[#101115] text-[#34e4b1] lg:hidden " + val}>
            <nav class={"flex flex-col row-start-2 text-center text-2xl gap-5 mb-5"}>
                { mdx.sort( (a, b) => {
                    return (a.data.position || 0) - (b.data.position || 0);
                }).map( (entry) => {
                    return <a href={entry.slug}>{entry.data.title}</a> 
                } )}
            </nav>
        </div>
    );
}
