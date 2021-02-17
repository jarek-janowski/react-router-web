import '../styles/Hero.scss'

const Hero = () => {
    return (
        <div className="hero-wrapper"> 
            <h1 className="hero__heading">Cześć, <span className="hero__heading--special">tu Jarek!</span></h1>
            <a className="hero__link" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">Sprawdź mojego spotify</a>
        </div>
     );
}
 
export default Hero;