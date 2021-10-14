import Image from "next/image";
function Header() {
    return (
        <div>
            {/* flex justify-between :: so that children will have equal space between them*/}
            
            <div className="flex justify-between max-w-6xl">
                {/* left hand side to put the instagram logo*/}
                {/* tailwind is mobile first, so if i put in "hidden" for classname it'll hide the image on small screen, the lg:inline-grid is for it to appear on large screen*/}
                <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
                    {/* relative :: relative to parent size*/}
                    {/* cursor-pointer :: so we can hover it and have a cursor turn to pointing like it's a link*/}
                    <Image src="https://johnamata.github.io/siteassets/instagram-clone/ig.webp" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                {/* comment*/}
                {/* w-10 :: width of 10, h-10 :: height of 10*/}
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                    {/* lg:hidden means on large screen it becomes hidden, basically opposite of the instagram logo so that this one only appears to "replace" the larger instagram logo when the screen is smaller*/}
                    {/* flex-shrink-0 :: as screen gets smaller, i dont want this logo to be smaller*/}
                    <Image src="https://johnamata.github.io/siteassets/instagram-clone/insta-logo.png" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>

                {/* middle where i put the search bar*/}
                <div>
                    <input type="text" placeholder="search" />
                </div>
                {/* right hand side where i put the profiles/modals */}

            </div>
        </div>
    )
}

export default Header;