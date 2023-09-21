import React from "react"; 

const Card = (props) => {
    const title = props.title;
    const info = props.info;
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <a href="https://www.coursera.org/courses?query=software%20engineering">
            <button>view more</button>
            </a>
        </div>
    )
}

export default Card;