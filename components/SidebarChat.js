import React from 'react'

function SidebarChat() {
  return (
    <div className="flex-1 font-bold hover:bg-gray-200">
        <h2>Username</h2>
        <div className="font-light text-xs">
          <p>Last message...</p>
        </div>  
    </div>
  )
}

export default SidebarChat