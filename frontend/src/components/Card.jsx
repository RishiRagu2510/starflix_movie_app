import React from "react";
import { Link } from "react-router-dom";
import './card.css';

function Card({ movie }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="movie-card">
                <img src={movie.previewImg} alt="Preview Image" className="img-fluid" />
                <p>
                    {movie.length}|{movie.category}
                </p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        {/* Use movie.id instead of movie.titleImg */}
                        <Link to={`/details/${movie._id}`} state={{from:"cards",title:movie.title,bg:movie.previewImg,trailer:movie.video,des:movie.description,i:movie.Img1,i1:movie.Img2,i2:movie.Img3,i3:movie.Img4,i4:movie.Img5}}>
                            <ion-icon name="add-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
