import "@fontsource/catamaran"

export default function Menu() {

    const anchor = "flex justify-center items-center text-xl opacity-75 hover:opacity-100 ease-in-out duration-200 hover:scale-125 hover:border-b-2";
    
    return (
        <div class="flex flex-row justify-between w-full px-6 py-4 lg:px-14 lg:pt-6 text-[#34e4b1] overflow-hidden font-catamaran">

            {/* Name */}
            <div class="font-bold text-2xl font-catamaran">Sebastian Møldrup</div>

            {/* Nav - desktop */}
            <nav class="hidden lg:flex justify-between items-center w-[500px] h-[40px]">
                <a href="" class={anchor}>Hjem</a>
                <a href="" class={anchor}>Om meg</a>
                <a href="" class={anchor}>Prosjekter</a>
                <a href="" class={anchor}>Kontakt</a>
            </nav>

            {/* Burger menu */}
            <div class="flex lg:hidden justify-center items-center p-0 m-0">
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

            {/* Nav - mobile */}
            <div class="hidden">
                <nav class="hidden lg:block">
                    <a href="">Hjem</a>
                    <a href="">Om meg</a>
                    <a href="">Prosjekter</a>
                    <a href="">Kontakt</a>
                </nav>
            </div>
        </div>
    );
}

