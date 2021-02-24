const Hero = ({className, titleUpper, titleLower, subtitle, noSpotify}) => {
    ;
    const spotify = <a className="hero__link" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">Sprawdź mojego spotify</a>
    return ( 
        <section className= {"hero " + className}>
            <div className="hero-wrapper"> 
                <h1 className="hero__heading">{titleUpper}, <span className="hero__heading--special">{titleLower}</span><span className="hero__heading--special-small">{subtitle}</span></h1>  
                {noSpotify ? null : spotify}
             </div>
        </section> 
     );
}
 
export default Hero;