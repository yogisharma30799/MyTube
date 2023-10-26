import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './AppSlice'
import { useSearchParams } from 'react-router-dom'
import { CommentContainer } from './CommentContainer'
import LiveChat from './LiveChat'

function WatchPage() {

    const [searchParam] = useSearchParams()
    const search = searchParam.get("v");
    console.log(searchParam.get("v"))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    })
    return (
        <div className='flex flex-col w-full'>
            <div className='px-4 py-4 flex'>
                <div>
                <iframe className='rounded-lg' width="700" height="400" src={"https://www.youtube.com/embed/" + search} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage