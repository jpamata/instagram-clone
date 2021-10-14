import Image from "next/image";
function Header() {
    return (
        <div>
            <h1>this is a header</h1>
            {/* left hand side to put the instagram logo*/}
            <div>
                <Image src="https://johnamata.netlify.app/projects/instagram-clone/ig.webp" layout="fill"/>
            </div>
            {/* middle where i put the search bar*/}

            {/* right hand side where i put the profiles/modals */}
        </div>
    )
}

export default Header;