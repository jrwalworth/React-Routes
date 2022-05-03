import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Param = () => {
    const {param} = useParams();
    //only display if number is passed, redirect if NaN - useNavigate here?
    if (isNaN(param)) {
        return <div className='param'><h2>Word is: {param}</h2></div>
    }else {
        return <div className='param'><h2>Number is: {param}</h2></div>
    }
};

export default Param;