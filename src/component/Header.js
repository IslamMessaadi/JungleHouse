const Header=(props)=>{
    //const {hero, title, state, motto, img}= props;
    return (
        <div>
            <nav className="bg-dark navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">JungleHouse</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;