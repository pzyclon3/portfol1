import React from "react";
import './index.scss'

function Card({title,imageUrl,body,body1,body2,body3,body4}) {
    return (
        <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt ='davor-shokoski' />
        </div>
        <div className="card-content">
        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
        <p>{body}</p>
        <p>{body1}</p>
        <p>{body2}</p>
        <p>{body3}</p>
        <p>{body4}</p>
        </div>
        </div>
        <div className="btn">
        <a href="https://wikitia.com/wiki/Davor_Shokoski" target="_blank"><button>VIEW MORE</button></a>

        </div>
    
        </div>
    )
}

export default Card