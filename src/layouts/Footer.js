// import '../styles/Footer.scss'
import Widmo from '../images/widmo.png'

const Footer = () => {
    return (
        <>
        <section className="footer">
            <div className="footer-wrapper">
                <a className="footer__socials" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg&nd=1"><i className="fa fa-spotify" aria-hidden="true"></i></a>
                <a className="footer__socials" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100010804669303"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a className="footer__socials" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jarosław-janowski-8933181b0/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
            <img className="footer__image" src={Widmo} alt="widmo"/>
            <img className="footer__image--2" src={Widmo} alt="widmo"/>
            <p className="footer__description"><span>Polityka prywatności</span>
            &copy; {new Date().getFullYear()} Jarek Janowski. All rights reserved</p>
        </section>
        
        
        </>
     );
}
 
export default Footer;