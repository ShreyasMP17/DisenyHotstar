import { useState } from "react";
import '../styles/celebs.css'

const Celebs = () => {
    //database
    let stars = [
        {
            img: "images/dbosss.jpg",
            name: "Darshan",
            id: "1"
        },
        {
            img: "images/puneeth.jpg",
            name: "Puneeth Rajkumar",
            id: "2"
        },
        {
            img: "images/kiccha.jpg",
            name: "Sudeep",
            id: "3"
        },
        {
            img: "images/yas.jpg",
            name: "Yash",
            id: "4"
        },
        {
            img: "images/ra.jpg",
            name: "Rakshith ",
            id: "5"
        }
    ]
    let [starsData, setData]=useState(stars)
    let handleRemove=(id,name)=>{
        setData(starsData.filter(x=>x.id !=id))
        alert(`${name} has been removed`)
    }
    return (
        <div className="celebs">
            <h1>Top Celebrities</h1>
            {starsData.map(data => (
                <div className="celebs_lists">
                    <div className="images">
                    <img src={data.img} alt=""/>
                    </div>
                    <div className="info">
                        <h1>{data.name}</h1>
                        <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Celebs;