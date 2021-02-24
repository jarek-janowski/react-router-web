import {NavLink} from 'react-router-dom'
// import '../styles/Navigation.scss'



const Header = () => {

 
    return (
        <nav className="navigation">
            <NavLink className="navigation__link navigation__link--homepage" exact to="/"><i className="fa fa-home" aria-hidden="true"></i></NavLink>
            <NavLink className="navigation__link navigation__link--genres" to="genres">gatunki</NavLink>
            <NavLink className="navigation__link" to="top5">top5</NavLink>
        </nav> 
     );
}
 
export default Header;