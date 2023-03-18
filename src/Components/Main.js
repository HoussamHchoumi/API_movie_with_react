/* eslint-disable no-unused-vars */
import react from "react";

const Main=()=>{
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
        </>
    )
}
export default Main;
