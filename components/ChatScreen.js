import React from 'react'
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function ChatScreen() {

    const { data: session} = useSession();

  return (
    <div className="bg-gray-200">
        <div className="ml-20">
            
            <div className="font-bold text-lg">
            <h3>Recipient Username</h3>
            </div>
            <p>Last seen...</p>
        </div>
        <div className="min-h-[550px] ">
            
        </div>
        {session && (
                <form className="flex items-center p-4 sticky-bottom-0 bg-white border border-8 border:bg-gray-200">
                <EmojiHappyIcon className="h-7" />
                <input 
                    
                    type="text" 
                    placeholder="Write a message..."
                    className="border-none flex-1 focus:ring-0 outline-none" 
                />
                <button 
                    type="submit"
                    
                    className="font-semibold text-blue-400"
                >
                    Send
                </button>
            </form>
            )}
    </div>
  )
}

export default ChatScreen