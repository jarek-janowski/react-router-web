// import '../styles/AboutPage.scss'
// import '../styles/Hero.scss'
import me from '../images/me.jpeg'
import Hero from '../components/Hero'

const About = () => {
    
    
    return ( 
        <>
            <Hero 
                className="hero--about"
                titleUpper="Cześć"
                titleLower="tu Jarek!"
                subtitle="Witaj w strefie dobrych brzmień 😎"
            />
            <section className="about">
                <article className="who-am-i">
                    <div className="who-am-i__wrapper">
                        <img className="who-am-i__photo" src={me} alt="me"/>
                        <section>
                            <h2 className="who-am-i__heading">Kim jestem?</h2>
                            <p className="who-am-i__description">Przyszłym programistą Front-end'owym mam nadzieję 😊.
                            Jest to strona, na której chcę wykorzystać w praktyce React Router, API Deezera i na pewno też
                            wiele się przy okazji nauczyć! Po za tym będzie tu sporo o muzyce edm czy rapie,
                            gdyż jest to moja pasja od hmm.. chyba od zawsze, ale jakoś około 7 lat temu 
                            zagłębiłem się w to bardziej i tak do dzisiaj śledzę co tygodniowe nowości i
                            uzupełniam swoje playlisty na <a className="who-am-i__description--link" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">spotify</a>,
                            na które zapraszam!
                            </p>
                        </section>
                        <section>
                            <h3 className="who-am-i__heading">Skąd to zainteresowanie muzyką?</h3>
                            <p className="who-am-i__description">Od dziecka po prostu lubiłem słuchać muzyki, jeszcze na tzw. "wieży",
                            starsi pamiętają 😏. Nawet próbowałem swoich sił w graniu na instrumentach, ale nie było mi to pisane. 
                            Z czasem moje gusta się zmieniały, całe gimnazjum było namalowane rapem, a od technikum zacząłem wchodzić
                            w muzykę EDM, do której mam największe zamiłowanie do dziś. </p>
                        </section>
                    </div>
                    <p className="after"></p>
                    
                </article>
            </section>
        </>
     );
}
 
export default About;