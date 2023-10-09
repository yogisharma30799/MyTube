import React from 'react'
import { toggleMenu } from './AppSlice'
import { useSelector } from 'react-redux';

function SideBar() {
    const isToggleMenu = useSelector((store) => store.app.isToggleMenu)
    if (!isToggleMenu) return null;
    return (
        <div className='w-48 shadow-lg p-4'>
            <ul className='py-2 m-2'>
                <li>Home</li>
                <li>Short</li>
                <li>Subscriction</li>
            </ul>
            <div className=' border-t-2 border-t-gray-400 py-2 m-2'>
                <ul >
                    <li>Library</li>
                    <li>History</li>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                    <li>Liked Video</li>
                </ul>
            </div>
            <div className=' border-t-2 border-t-gray-400 py-2 m-2'>
                <h1 className='font-bold'>Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Gaming</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar