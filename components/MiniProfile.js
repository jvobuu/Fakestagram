function MiniProfile() {
    return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img 
            className="rounded-full border p-[2px] w-16 h-16"
            src="https://cdn130.picsart.com/318381621277201.jpg?to=crop&type=webp&r=310x310&q=50" 
            alt="" 
        />

        <div className="flex-1 mx-4">
            <h2 className="font-bold">Dude</h2>
            <h3 className="text-sm text-gray-400">welcome to fakestagram</h3>
        </div>

        <button className="text-sm text-blue-400 font-semibold">Sign Out</button>
    </div>
    )
}

export default MiniProfile;