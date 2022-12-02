import React from 'react';
import {useParams } from 'react-router-dom'


const Registration = () => {
    const location = useParams()

    console.log(location.CourseId)


    return (
        <div className={"container"}>
            registration page
        </div>
    );
};

export default Registration;