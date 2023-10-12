import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './AppSlice'
import { YOUTUBE_SUGGESTION_API, } from '../utils/Contants'
import { CacheStore } from '../utils/CacheSlice'

function Header() {
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const cacheStore = useSelector((store) => store.cache)

    const [inputSearch, setInputSreach] = useState("");
    const [searchData, setSearchData] = useState();
    const [showSuggestion , setShowSuggestion] = useState(false)

    const getSearchSuggestion = async () => {
        const response = await fetch(YOUTUBE_SUGGESTION_API + inputSearch);
        const json = await response.json()
        setSearchData(json[1])
        dispatch(CacheStore({
            [searchData] : json[1]
        }))
        console.log("searchData", searchData)
    }
    
    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (cacheStore[searchData]) {
                setSearchData(cacheStore[searchData])
            } else {
                getSearchSuggestion();
            }
        }, 200);
        
        return () => { clearTimeout(timer) };
        
    }, [inputSearch])

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg w-full'>
            <div className='flex col-span-1'>
                <img onClick={() => {
                    handleToggleMenu()
                }} className='h-8 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC" alt="menu" />
                <img className='h-8' src='https://cdn.worldvectorlogo.com/logos/youtube.svg' alt="logo" />
            </div>
            <div className=' relative col-span-10' >
                <input onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)} onChange={(e) => setInputSreach(e.target.value)} className='w-1/2 px-4 border border-gray-400 rounded-l-full' type="search" />
                <button className='border px-3 border-gray-400 rounded-r-full focus:border-none'>Search</button>
                {showSuggestion && (<div className='bg-slate-200 w-1/2 rounded-lg absolute'>
                    <ul className='px-3 py-1'>
                        {searchData && searchData.length > 0 && searchData.map((items) => (
                            <li key={items} className='py-2 cursor-pointer'>{items}</li>
                        ))}
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1 flex'>
                <img className='h-8' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
            </div>
        </div>
    )
}

export default Header