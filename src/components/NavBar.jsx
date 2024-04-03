import musicNotes from '../assets/musicNotes.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{width: '100%'}}>
            <div className="container-fluid">
            <div className="navbar-brand">

                <h1 className='d-flex' style={{fontFamily: 'Royal Acid', fontSize: '35px',  alignItems: 'baseline'}}>
                The Groove 
                <img id="header-image" src={musicNotes} alt="music notes" style={{display: 'inline', height: '80px', width: '190px', paddingLeft: '5px'}}/>
                </h1>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;