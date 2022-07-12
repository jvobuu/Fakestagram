import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useEffect, useState } from "react";

function Stories() {

    const [suggestions, setSuggestions] = useState([]);


    useEffect (() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, []);

    return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {suggestions.map(profile => (
            <Story 
                key={profile.id} 
                img={profile.avatar} 
                username={profile.username}
            />
        ))}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
    </div>
    );
}

export default Stories;