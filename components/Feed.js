import Stories from "./Stories"

function Feed() {
    return (
        <main class="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* comment */}
            {/* grid grid-cols-1 :: by default on mobile it'll be 1 column */}
            
            {/* section */}
            {/* section - stories, posts */}
            <section className="col-span-2">
                {/* stories */}
                <Stories />
                {/* posts */}
            </section>

            {/* section */}
            {/* section - miniprofile, suggestions */}    
            <section>
                
            </section>
        </main>
    )
}

export default Feed
