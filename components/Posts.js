import Post from "./Post"


const posts = [
    {
        id: '123',
        username: 'jpamata',
        userImg: 'https://avatars.githubusercontent.com/u/59356126?v=4',
        img: 'https://avatars.githubusercontent.com/u/59356126?v=4',
        caption: "dummy caption",
    },
    {
        id: '123',
        username: 'jpamata',
        userImg: 'https://avatars.githubusercontent.com/u/59356126?v=4',
        img: 'https://avatars.githubusercontent.com/u/59356126?v=4',
        caption: "dummy caption",
    },
]

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} 
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
            {/* add post here */}
        </div>
    )
}

export default Posts
