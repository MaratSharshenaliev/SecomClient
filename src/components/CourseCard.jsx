import React from 'react';
import style from "../App.module.css"

const CourseCard = ({item}) => {

    const starSvgFill = (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.61224 15.4427C3.2258 15.6413 2.78823 15.2942 2.86603 14.8508L3.69576 10.1213L0.173428 6.76462C-0.155753 6.45092 0.0146475 5.87737 0.455637 5.81472L5.35411 5.11885L7.53823 0.792305C7.73498 0.402565 8.26795 0.402565 8.4647 0.792305L10.6488 5.11885L15.5473 5.81472C15.9883 5.87737 16.1587 6.45092 15.8295 6.76462L12.3072 10.1213L13.1369 14.8508C13.2147 15.2942 12.7771 15.6413 12.3907 15.4427L8.00146 13.1868L3.61224 15.4427Z"
                fill="gold"/>
        </svg>
    )

    const starSvg = (<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.86603 14.8508C2.78823 15.2942 3.2258 15.6413 3.61224 15.4427L8.00146 13.1868L12.3907 15.4427C12.7771 15.6413 13.2147 15.2942 13.1369 14.8508L12.3072 10.1213L15.8295 6.76462C16.1587 6.45092 15.9883 5.87737 15.5473 5.81472L10.6488 5.11885L8.4647 0.792305C8.26795 0.402565 7.73498 0.402565 7.53823 0.792305L5.35411 5.11885L0.455637 5.81472C0.0146475 5.87737 -0.155753 6.45092 0.173428 6.76462L3.69576 10.1213L2.86603 14.8508ZM7.77063 12.0826L4.08488 13.977L4.77914 10.0197C4.81187 9.83316 4.75033 9.64214 4.61639 9.5145L1.70955 6.7444L5.76186 6.16873C5.92938 6.14494 6.07565 6.03795 6.15467 5.88141L8.00146 2.22308L9.84826 5.88141C9.92728 6.03795 10.0736 6.14494 10.2411 6.16873L14.2934 6.7444L11.3865 9.5145C11.2526 9.64214 11.1911 9.83316 11.2238 10.0197L11.918 13.977L8.23229 12.0826C8.0867 12.0078 7.91623 12.0078 7.77063 12.0826Z"
            fill="gold"/>
    </svg>)


    return (
        <div className="mb-5 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
            {/* eslint-disable-next-line no-useless-concat */}
            <div className={"card h-100" + " " + style.card}>
                <div style={{position:"relative", cursor: "pointer"}}>
                    <a href={item.registration_toast}>
                        <img src={item.image} alt={""} className="card-img-top img-fluid"/>
                    </a>
                    <div className={style.coursesTag}>
                        <a style={{textDecoration:"none"}} className="d-block text-success fw-semibold">{item.logo_data.data_start} {item.logo_data.month}</a>
                    </div>
                </div>
                <div className="m-3 card-body">
                    <div className="d-flex justify-content-lg-start align-items-center">
                        <a className="rounded-circle" href={'#'}>
                            <img src={item.teacher.logotype} className={" border-dark rounded-circle img-responsive"}
                                 style={{maxHeight: "40px", maxWidth: "40px"}} alt={""}/>
                        </a>
                        <label className="m-1 fst-normal">{item.teacher.name}</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3 card-title"><h5>{item.title}</h5><h6 className={"fst-italic text-muted"}>{item.time_lesson.start}-{item.time_lesson.end}</h6></div>
                    <div className={"d-flex align-items-center"}>
                        {
                            [1, 2, 3, 4, 5].map(item => (
                                starSvgFill
                            ))
                        }
                        (5.0)
                    </div>
                </div>
                <div
                    className={"d-flex justify-content-between align-items-center card-footer bg-white " + style.card_footer}>
                    <div
                        className="m-xl-3 m-lg-3 m-xxl-3 m-md-3 m-sm-3 d-flex justify-content-center align-items-center">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"/></svg>
                        {item.students}</div>
                    <div className="py-3">{item.CountOflessons}/Lessons</div>
                    <div
                        className="py-3 text-danger fw-semibold">{item.current.cost} {item.current.currency}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;