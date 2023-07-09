import ReviewForm from "./ReviewModal";

export default function Movie({id, movie}){

    return(

        <div className="card col-md-3 m-3 p-2">
            <img src={movie.img} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title border-bottom border-dark">{movie.title} ({movie.year})</h5>
                <p className="card-text">{movie.synopsis}</p>
            </div>
            <div className="card-footer">
                
                <ReviewForm 
                    key={id}
                    id={id}
                    movie={movie}
                />
            </div>
        </div>
    )
}