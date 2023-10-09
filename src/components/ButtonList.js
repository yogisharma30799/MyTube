import React from 'react'
import Buttons from '../utils/Buttons'

function ButtonList() {
    const ButtonList = ["All", "Computer Programming", "Music", "Thoughts", "Sitcoms", "Mantras", "History", "Gadgets"]
    return (
        <div className='flex'>
            {ButtonList.map((name , index) => {
                return (

                    <div className=' mx-2'>

                    <Buttons key ={index} name={name} />
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonList;