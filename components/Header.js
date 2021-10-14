import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
function Header() {
    return (
        <div>
            {/* flex justify-between :: so that children will have equal space between them*/}
            
            <div className="flex justify-between max-w-6xl">
                {/* left hand side to put the instagram logo*/}
                {/* tailwind is mobile first, so if i put in "hidden" for classname it'll hide the image on small screen, the lg:inline-grid is for it to appear on large screen*/}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    {/* relative :: relative to parent size*/}
                    {/* cursor-pointer :: so we can hover it and have a cursor turn to pointing like it's a link*/}
                    <Image src="https://johnamata.github.io/siteassets/instagram-clone/ig.webp" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                {/* comment*/}
                {/* w-10 :: width of 10, h-10 :: height of 10*/}
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    {/* lg:hidden means on large screen it becomes hidden, basically opposite of the instagram logo so that this one only appears to "replace" the larger instagram logo when the screen is smaller*/}
                    {/* flex-shrink-0 :: as screen gets smaller, i dont want this logo to be smaller*/}
                    <Image src="https://johnamata.github.io/siteassets/instagram-clone/insta-logo.png" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>

                {/* middle where i put the search bar*/}
                {/* pointer-events-none :: so nothing wont happen to our pointer*/}
                <div className="relative mt-1 p-3 rounded-md">
                    {/* relative to position according to the container*/}
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        {/* comment*/}
                        {/* using heroicons from tailwindcss https://heroicons.com/ which need to be npm    installed */}
                        <SearchIcon className="h-5 w-5 text-gray-500"/> 
                    </div>
                    {/* pl-10:: padding left of 10 so we can have the text cursor separated with search icon*/}
                    {/* focus:border-black :: when we focus over it the border becomes black*/}
                    <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 docus:ring-black focus:border-black" type="text" placeholder="search" />
                </div>
                {/* right hand side where i put the profiles/modals */}

            </div>
        </div>
    )
}

export default Header;