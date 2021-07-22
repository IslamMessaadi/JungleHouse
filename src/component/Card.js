const Card=(props)=>{
    const {hero, title, state, motto, img}= props;
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{hero}</h5>
                    <small>{title} / {state}</small>
                    <p className="card-text">{motto}</p>
                    <button className="btn bg-dark text-white">Hero Page</button>
                </div>
            </div>
        </div>
    );
}

export default Card;