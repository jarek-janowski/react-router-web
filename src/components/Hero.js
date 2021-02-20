const Hero = ({className, titleUpper, titleLower, subtitle}) => {
    return ( 
        <section className= {"hero " + className}>
            <div className="hero-wrapper"> 
                <h1 className="hero__heading">{titleUpper}, <span className="hero__heading--special">{titleLower}</span><span className="hero__heading--special-small">{subtitle}</span></h1>  
                <a className="hero__link" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">Sprawdź mojego spotify</a>
             </div>
        </section> 
     );
}
 
export default Hero;