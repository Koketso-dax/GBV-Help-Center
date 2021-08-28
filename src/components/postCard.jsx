import React from 'react';
import "./postCard.css";

export default function postCard() {

    const username ="#_Shooter";
    const timestamp = "00:00";
    const message = "Love and Light to all";

    return (
        <div className = "Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://www.shareicon.net/data/512x512/2016/03/04/728638_shooting_512x512.png" alt="" height="100px" width="100px"/>
                </div>
            </div>
            <div className="lower-container">
                <h3>{username}</h3>
                <h4>{timestamp}</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}
