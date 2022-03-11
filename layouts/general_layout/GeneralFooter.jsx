import React from 'react'

const GeneralFooter = () => {
    const date = new Date();
    return (
        <footer className='mt-10'>
            {/* <div className='flex-col flex'>
                <a href="/" className='text-xl font-bold mb-1'>Tben.me</a>
            </div> */}
            <span className='text-sm opacity-40'>Copyright © { date.getFullYear() } Tben.me. All Rights Reserved.</span>
        </footer>
    )
}

export default GeneralFooter
