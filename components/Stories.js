import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
    {/* comment */}
    {/* basically the react way of writing variables. we got the variable in suggestions then if we want to change it, we just call setSuggestions function with the new value, and the initial value goes in useState() */}
    const [suggestions, setSuggestions] = useState([]) 
    {/* useState() :: handy hook to help prepare that piece of state inside the component*/}

    {/* https://reactjs.org/docs/hooks-effect.html */}
    useEffect(() => {
        {/* generate initial set of fake data/users */}
        {/* everytime it maps through, we return a val from that loop */}
        {/* have to store suggestions in state as each component has a state, which is a short term memory store for component, which dissapears everytime we reload page as it's non-persistent. that's why we have the ff above:
        "const [suggestions, setSuggestions] = useState([]) " 
        */}
        {/*...Array(20) :: just creates an array of 20 elements */}
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        {/* basically when the component mounts, we get a bunch of fake data then we set it to the store (setsuggestions) */}
        setSuggestions(suggestions)
    }, []);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll
        scrollbar-thin scrollbar-thumb-black">
            {/* 
            flex :: anytime we do flex, elements goes to row by behaviour 
            overflow-x-scroll :: when it overflows, we want it to be a scrollable container
            */}

            {/* anytime we use maps in any list inside react, we need to use a key as when reactJS does rerendering logic it has a list of elements in the screen. if we dont give a key, it wont know if we added an item to the end of the list so it rerenders everything. so having a key just haves it render the newest element 
            
            key={profile.id} :: passing attributes to story component, anytime we do it we call it props
            */}
            {suggestions.map(profile => (
                <Story 
                key={profile.id} 
                img={profile.avatar} 
                username={profile.username}
                />
            ))}
            {/* Story */}
        </div>
    )
}

export default Stories
