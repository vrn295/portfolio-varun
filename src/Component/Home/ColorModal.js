import React from 'react'
import './ColorModal.css'
import {connect} from 'react-redux'
import { useDispatch } from "react-redux";
import { modalPrimary , modalBackground } from "../Redux/action/action";

function ColorModal() {

    const dispatch = useDispatch();

    const colorModalPrimary = (color) =>{
        var htmlElement = document.querySelector('html')
        htmlElement.setAttribute('theme-color',color)
        dispatch(modalPrimary(color))
    }
    const colorModalBackground = (color) =>{
        var htmlElement = document.querySelector('html')
        htmlElement.setAttribute('background-color', color)
        dispatch(modalBackground(color))
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


export default ColorModal