import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/AddFavourites.css"

const AddFavourites = () => {
    let [title, setTitle] = useState("")
    let [genre, setGenre] = useState("")
    let [language, setLanguage] = useState("")
    let [rating, setRating] = useState("")
    let navigate =useNavigate()
    
    let reset=()=>{
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }

    let handleClick = (a) => {
        a.preventDefault()  
        let data ={title,genre,language,rating}
        fetch("http://localhost:4000/favourites",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("Add to Favourites lists")
        navigate("/movies")
    }
        return (
        <div className="addFavourites">
            <h1>Add To Favourites</h1>
            <div className="form">
                <div className="form_image">
                    <img height='525' width='500' src="images/14.jpg" alt="" />
                </div>
                <div className="form_inputs">
                    <form action="">
                        <div className="title">
                            <input type="text" placeholder="enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className="genre">
                            <input type="text" placeholder="enter genre" value={genre} onChange={(e)=>setGenre(e.target.value)} />
                        </div>
                        <div className="language">
                            <input type="text" placeholder="language" value={language} onChange={(e)=>setLanguage(e.target.value)}/>
                        </div>
                        <div className="Rating">
                            <input type="text" placeholder="enter rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                        </div>
                        <button type="submit" onClick={handleClick}>Add To Favourites</button>
                        <button type="reset" onClick={reset}>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFavourites;

