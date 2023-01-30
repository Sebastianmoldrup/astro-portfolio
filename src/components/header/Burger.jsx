import { signal } from "@preact/signals";

const state = signal(0);

export function Burger() {

    console.log(state.value);

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
        <div class={"fixed top-14 left-0 grid place-items-center w-screen h-screen p-0 m-0 bg-[#101115] text-[#34e4b1] lg:hidden " + val}>
            <nav class={"flex flex-col text-center text-2xl gap-5"}>
                <a href="">Hjem</a>
                <a href="">Prosjekter</a>
                <a href="">Om meg</a>
                <a href="">Kontakt</a>
            </nav>
        </div>
    );
}