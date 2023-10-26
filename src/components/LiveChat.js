import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/ChatSlice';
import { generateRandomName, generateRandomText } from '../utils/helper';

function LiveChat() {
    const [liveMessage, setLiveMessage] = useState()

    const dispatch = useDispatch();

    const chatmessage = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessages(

                    {
                        name: generateRandomName(),
                        message: generateRandomText(20)

                    }
                )
            )
        }, 2000);

        return () => clearInterval(i)
    }, [])

    return (
        <>
            <div className='ml-1 w-full h-[400px] p-2 border-black-200 border bg-slate-100 overflow-y-scroll flex flex-col-reverse '>
                {chatmessage.map((chat) => (
                    <ChatMessage name={chat.name} message={chat.message} />

                ))}
            </div>
            <form className='px-2' onSubmit={(e) => {
                e.preventDefault()
                dispatch(
                    addMessages({

                        name: "yogi",
                        message: liveMessage
                    })
                )
                setLiveMessage("")
            }
            }>
                <input type="text" className='px-2 w-96 border border-black' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='bg-green-200 px-2'>Send</button>
            </form >
        </>
    )
}

export default LiveChat