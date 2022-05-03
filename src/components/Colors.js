import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Colors = () => {
    const {param, color, bgColor} = useParams();
    //only display if number is passed, redirect if NaN - useNavigate here?
    if (isNaN(param)) {
        return <div className='param' style={{color: color, background:bgColor}}><h2>Word is: {param}</h2></div>
    }else {
        return <div className='param' style={{color: color, background: bgColor}}><h2>Number is: {param}</h2></div>
    };

};

export default Colors;