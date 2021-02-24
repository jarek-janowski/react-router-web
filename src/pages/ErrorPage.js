import Hero from '../components/Hero'

const ErrorPage = () => {
    return ( 
        <Hero 
            className="hero--error"
            titleUpper="Ups"
            titleLower="coś poszło nie tak.."
            subtitle="Nie panikuj! Popraw adres :)"
            noSpotify
        />
     );
}
 
export default ErrorPage;