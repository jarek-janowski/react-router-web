import '../styles/Footer.scss'
import Widmo from '../images/widmo.png'

const Footer = () => {
    return (
        <>
        <section className="footer">
            <a className="footer__socials" href=""><i className="fa fa-spotify" aria-hidden="true"></i></a>
            <a className="footer__socials" href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a className="footer__socials" href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <img className="footer__image" src={Widmo} alt="widmo"/>
            <img className="footer__image--2" src={Widmo} alt="widmo"/>
        </section>
        
        </>
     );
}
 
export default Footer;