import React from 'react'
import './ColorModal.css'
export default function ColorModal() {
    const colorModal = (color) =>{
        var htmlElement = document.querySelector('html')
        htmlElement.setAttribute('theme-color',color)
        // if(color === 'pink'){
        //     htmlElement.setAttribute('theme-color',color)
        // }
        // else if(color === 'green'){
        //     htmlElement.setAttribute('theme-color',color)
        // }
        
    }
    return (
        <>
            <ul className='color-box'>
                <li onClick = {() => {colorModal("default")}} className='default'></li>
                <li onClick = {() => {colorModal("pink")}} className='pink'></li>
                <li onClick= {() => {colorModal("blue")}} className='blue'></li>
                <li onClick= {() => {colorModal('purple')}} className='purple'></li>
            </ul>
        </>
    )
}
