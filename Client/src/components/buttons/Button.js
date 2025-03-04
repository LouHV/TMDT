import React, { memo } from 'react'
import clsx from 'clsx'
const Button = ({ children, handleOnClick, style,  fw,type='button' }) => {
    return (
        <button
            type={type}
            className={style ? style : `px-4 py-2 rounded-md text-white my-2 bg-main text-semibold ${fw ? 'w-full' : 'w-fit'}`}
            onClick={() => { handleOnClick && handleOnClick() }}
        >

            {children}
            
        </button>
    )
}

export default memo(Button)