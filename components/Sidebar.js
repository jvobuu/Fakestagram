import React from 'react'
import { SearchIcon } from "@heroicons/react/outline"
import SidebarChat from "./SidebarChat"
import * as EmailValidator from "email-validator"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db} from "../firebase"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function Sidebar() {

    const [user, setUser] = useState("");
    const { data: session} = useSession();

    const createChat = async (e) => {
        e.preventDefault();

        const userChat = user;

        await add(collection(db, 'chats'), {
            users: [session.user.username, user],
        });
    };


    // const createChat = async () => {
        
    //     const input = prompt('Please enter an email address for the user you want to chat with');

    //     if (!input) return null;

    //     if (EmailValidator.validate(input)) {
    //         //add chat into database
    //         await addDoc(collection(db, 'chats'), {
    //             users: [user.email.input],
    //         }, {merge: true})
    //     }
    // }

  return (
            <div class="">
                {session && (
                <form>
                    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 ">
                    <div className="max-w-xs">
                                <div className="relative mt-1 p-3 rounded-md">
                                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-event-none">
                                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                                    </div>
                                    <input 
                                        className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
                                        focus:ring-black focus:border-black rounded-md" 
                                        type="text" 
                                        placeholder="Search or start new chat"
                                        onChange={e => setUser(e.target.value)}
                                        value={user}
                                    />
                            </div>
                    </div>
                    <div className="w-full hover:bg-gray-200 border-t-2 border-b-2 border-white text-center bg-white font-bold">
                        <button onclick={createChat}>START A NEW CHAT</button>
                    </div>
                    <div className="max-w-xs p-[20px] cursor-pointer space-y-4 ">
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                    </div>
                </div>
                </form>
                )}
            </div>
  )
}

export default Sidebar