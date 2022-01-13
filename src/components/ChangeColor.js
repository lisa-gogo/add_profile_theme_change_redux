import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeColor} from '../featues/theme'

function ChangeColor() {

    const [color,setColor] = useState('');
    const dispatch = useDispatch();
    return (
        <div className='color'>
            <input type="text"
            onChange={(e)=>{setColor(e.target.value)}}/>
            <button onClick={()=>{dispatch(changeColor(color))}} >CHANGE COLOR</button>
        </div>
    )
}

export default ChangeColor