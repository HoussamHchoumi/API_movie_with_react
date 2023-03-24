
import react,{useEffect, useState} from "react";
import Carte from "./Carte";
//On définit ici quelques constantes et variables qui seront utilisées dans notre application
//API_key contient la clé API fournie par l'API TheMovieDB
//base_url contient l'URL de base pour toutes les requêtes à l'API 
//url est l'URL pour récupérer les films les plus populaires au départ
//arr est un tableau de chaînes contenant les différents types de films que nous pouvons rechercher
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Populaire","Theatre","Enfants","Drama","Comedie"];
//composent principal
//useState pour créer trois états
//movieData contiendra les données des films récupérées depuis l'API
//url_set contiendra l'URL de l'API à appeler
//search contiendra le terme de recherche saisi par l'utilisateur
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search, setSearch]=useState(); 
    //useEffect pour déclencher une requête à l'API chaque fois que url_set est mis à jour
    // fetch pour récupérer les données de l'API 
    // setData pour mettre à jour l'état movieData
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

    //Cette fonction est appelée lorsqu'un utilisateur appuie sur la touche enter lorsqu'il recherche un film
    // Elle utilise l'état search pour mettre à jour l'URL de l'API avec la recherche effectuée par l'utilisateur
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
