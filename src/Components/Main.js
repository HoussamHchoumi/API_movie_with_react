/* eslint-disable no-unused-vars */
import react,{useEffect, useState} from "react";
import Carte from "./Carte";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.results);
            setData(data.results);
        });
    },[url_set]

    )
    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li><a href="#">Populaire</a></li>
                        <li><a href="#">Theatre</a></li>
                        <li><a href="#">enfants</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Comedie</a></li>
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="entrer votre movie" className="inputText"></input>
                        <button><i class="bi bi-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">notfound</p>: movieData.map((res,pos)=>{
                        return(
                            <Carte info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;
