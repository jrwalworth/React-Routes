import { colours } from 'nodemon/lib/config/defaults';
import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Color = () => {
    const {param, color} = useParams();
    //only display if number is passed, redirect if NaN - useNavigate here?
    if (isNaN(param)) {
        return <div className='param' style={{color: color}}><h2>Word is: {param}</h2></div>
    }else {
        return <div className='param' style={{color: color}}><h2>Number is: {param}</h2></div>
    };

};

export default Color;