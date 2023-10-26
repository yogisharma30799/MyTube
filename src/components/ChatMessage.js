import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center border-b border-slate-300 p-1'>
            <img className='h-7 mr-2' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />

            <span className='mr-2 font-bold'>{name}</span>
            <span>{message}</span>

        </div>
    )
}

export default ChatMessage
