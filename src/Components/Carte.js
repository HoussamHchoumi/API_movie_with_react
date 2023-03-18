import react from "react";


const Carte=(movie)=>{
    console.log(movie.info);
    return(
        <>
            <div className="movie">
                <img src="images/poster.jpg" className="poster">

                </img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">Movie Titre</h4>
                        <p className="rating">9.7</p>
                    </div>
                    <div className="overview">
                        <h1>vue générale</h1>
                        After est une série américaine romantique composée de quatre films, adaptés des romans éponymes de la romancière Anna Todd.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Carte;