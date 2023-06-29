import "../styles/movies.css"
import { useEffect, useState } from "react"
import MoviesLogic from "./moviesLogic"

const Movies = () => {

    let [favouritesData, setData] = useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let response = fetch('http://localhost:4000/favourites')
            let data=await (await response).json()
            setData(data)
        }
fetchData()
    })

    let handleClick = (id, title) => {
        setData(favouritesData.filter(x => x.id != id))
        alert(`${title} - has been removed from the favourites`)
    }
    return (
        <div className="movies">
            <MoviesLogic title="Favourites Of All Time" data={favouritesData} fun={handleClick} />
            <MoviesLogic title="Top Rated" data={favouritesData.filter(x=>x.rating>=4.5)} fun={handleClick} />
            <MoviesLogic title="Top english movies" data={favouritesData.filter(x=>x.language=="english")} fun={handleClick} />
        </div>
    );
}

export default Movies;