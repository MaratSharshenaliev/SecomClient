import React from 'react';
import data from "../data";
import CourseCard from "../components/CourseCard";




const Home = () => {

    // here will be requests to backend and take up data response


    return (
        <div className="container-fluid">
            <h3 className={"text-center mt-5 text-uppercase"}>online registration</h3>
            <div className={"container py-4"}>
                <div className={"row"}>
                    {data.map(item => (
                            <CourseCard item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;