# get skilled

It's 2021-10-15. Just a few minutes passed midnight and I'm sitting on a dim lit room with a bowl of milk and Koko Krunch chocolate cereals by my macbook. I was about to sleep, watch a TV show or two at netflix before turning off the lampshade and hit the bed. But I remembered that I havent done anything productive yesterday. Didnt spend at least 30 minutes bettering myself, and that's not how you win. It's time to get skilled bros LEZGO

![](pic.jpeg)

# notes

### start creating a next.js project with tailwindcss

from: https://tailwindcss.com/docs/guides/nextjs

```
npx create-next-app -e with-tailwindcss my-project
cd-project
```

### pages

where to put our pages, ex. index.js -> index.html, about.js -> about.html

### components

components directory where i put stuff like header, feed, and other components

### _rfce

type _rfce then hit return/enter on VS code, needs the es7 react/redux/graphql/react-native snippets. creates a react functional export component, for example for components/header.js it generated:

```javascript
function Header() {
    return (
        <div>
            
        </div>
    )
}

export default Header
```

### ctrl + space

finds path for import for VS Code, like typing  on the index.js the header component

```javascript
<Header/>
```

then hitting enter/return will show up the path for you to import with, then i can just hit enter and it'll generate an import for it at the top

```javascript
import Header from '../components/Header'
```

### image components

for images, use image component as it compresses image

```javascript
<Image/>
```

needs config file containing the image domain though, which for example in this case i have it stored at https://johnamata.github.io/siteassets/instagram-clone/ig.webp so my next.config.js file is:

```javascript
module.exports = {
    images: {
        domains: ["johnamata.github.io"],
    }
}
```

### errors

got internal server error after npm installing heroicons and others like npm installing faker.js with "npm install faker"

stopping the server and running "npm run dev" kept on failing after installing them. so i just deleted the node_modules folder and installed with npm install but it failed. Then I did the following and it's working again

```
yarn install
npm run dev
```

js is so weird

### TAILWINDCSS FORMS

from: https://github.com/tailwindlabs/tailwindcss-forms

```
yarn add @tailwindcss/forms
```
