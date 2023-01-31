import { signal } from "@preact/signals";
import { getCollection } from 'astro:content';
const mdx = await getCollection('blog');

const state = signal(0);

export function Burger() {

    return (
        <div class="flex lg:hidden justify-center items-center p-0 m-0 cursor-pointer" onClick={() => state.value ? state.value-- : state.value++}>
            <a class="w-[30px] h-[30px] pt-0.5">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px" 
                    height="30px" 
                    viewBox="0 0 16 16"
                >
                <path 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="1.5" 
                    d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/
                >
                </svg>
            </a>
        </div>
    );
}

export function Overlay() {

    const val = state.value ? "block" : "hidden";

    return (
        <div class={"fixed left-0 grid place-items-center w-screen h-full p-0 m-0 top-14 bg-[#101115] text-[#34e4b1] lg:hidden " + val}>
            <nav class={"flex flex-col text-center text-2xl gap-5 mb-5"}>
                { mdx.sort( (a, b) => {
                    return (a.data.position || 0) - (b.data.position || 0);
                }).map( (entry) => {
                    return <a href={entry.slug}>{entry.data.title}</a> 
                } )}
            </nav>
        </div>
    );
}
