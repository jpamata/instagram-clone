function Story({img, username}) {
    return (
        <div>
            {/* 
            p-1.5px :: padding of exact 1.5px
            border-red-500 border-2 :: have an instagram style story reddish border circle
            object-contain :: keep aspect ratio
            cursor-pointer :: so we can hover over it and mouse will look like a pointer
            */}
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer" src={img} alt="" />
            {/* 
            text-xs : extra small text
            truncate : truncate long text to become ...
            */}
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story