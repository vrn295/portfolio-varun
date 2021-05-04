import React from 'react'
import './ColorModal.css'
export default function ColorModal() {
    const colorModalPrimary = (color) =>{
        var htmlElement = document.querySelector('html')
        htmlElement.setAttribute('theme-color',color)
    }
    const colorModalBackground = (color) =>{
        var htmlElement = document.querySelector('html')
        htmlElement.setAttribute('background-color',color)
    }
    return (
        <>
            <ul className='color-box'>
                <p>Primary Color</p>
                <div>
                    <li onClick = {() => {colorModalPrimary("default")}} className='default'></li>
                    <li onClick = {() => {colorModalPrimary("pink")}} className='pink'></li>
                    <li onClick= {() => {colorModalPrimary("blue")}} className='blue'></li>
                    <li onClick= {() => {colorModalPrimary('purple')}} className='purple'></li>
                </div>
                <p>Background Color</p>
                <div>
                <li onClick = {() => {colorModalBackground("black")}} className='black'></li>
                <li onClick = {() => {colorModalBackground("white")}} className='white'></li>
                <li onClick= {() => {colorModalBackground("light")}} className='light'></li>
                <li onClick= {() => {colorModalBackground('dark')}} className='dark'></li>
                </div>
            </ul>
        </>
    )
}
