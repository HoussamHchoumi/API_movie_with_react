/* eslint-disable no-unused-vars */
import react,{useEffect, useState} from "react";
import Carte from "./Carte";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Populaire","Theatre","Enfants","Drama","Comedie"];
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search, setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.results);
            setData(data.results);
        });
    },[url_set]
    )
    const getData=(movieType)=>{
        if(movieType=="Populaire"){
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre"){
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Enfants"){
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama"){
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedie"){
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            //console.log("salut")
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    
    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        {
                            arr.map((value)=>{
                                return(
                                    <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}} >{value}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="entrer votre movie" className="inputText" onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie} ></input>
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
