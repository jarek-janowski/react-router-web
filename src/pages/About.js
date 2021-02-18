import '../styles/About.scss'
import '../styles/Hero.scss'
import me from '../images/me.jpeg'

const About = () => {
    return ( 
        <>
            <section className="hero">
                <div className="hero-wrapper"> 
                    <h1 className="hero__heading">Cześć, <span className="hero__heading--special">tu Jarek!</span><span className="hero__heading--special-small">Witaj w strefie dobrych brzmień 😎</span></h1>
                    
                    <a className="hero__link" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">Sprawdź mojego spotify</a>
                </div>
            </section>
            <section className="about">
                <article className="who-am-i">
                    <div className="who-am-i__wrapper">
                        <h2 className="who-am-i__heading">Kim jestem?</h2>
                        <p className="who-am-i__description">Przyszłym programistą Front-end'owym mam nadzieję 😊.
                        Jest to strona, na której chcę wykorzystać w praktyce React Router i na pewno też
                        wiele się przy okazji nauczyć! Po za tym będzie tu sporo o muzyce edm czy rapie,
                        gdyż jest to moja pasja od hmm.. chyba od zawsze, ale jakoś około 7 lat temu 
                        zagłębiłem się w to bardziej i tak do dzisiaj śledzę co tygodniowe nowości i
                        uzupełniam swoje playlisty na <a className="who-am-i__description--link" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">spotify</a>,
                        na które zapraszam!
                        </p>
                        <h3 className="who-am-i__heading--3">Czego obecnie słucham?</h3>
                        <p className="who-am-i__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eaque impedit recusandae dicta quasi nobis unde natus dolorum aliquid numquam nisi magnam blanditiis temporibus distinctio culpa possimus, tempora, fugit iste? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda aut quas fuga atque nemo asperiores nesciunt facilis? Placeat sunt eum at quo est dolorum voluptates ab impedit tenetur a?</p>
                    </div>
                    <p className="after"></p>
                    <img className="who-am-i__photo" src={me} alt="me"/>
                </article>
            </section>
        </>
     );
}
 
export default About;