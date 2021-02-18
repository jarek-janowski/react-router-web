import '../styles/GenresPage.scss'
import '../styles/Hero.scss'

const GenresPage = () => {
    return (
        <>
        <section className="hero hero--genres">
            <div className="hero-wrapper"> 
                <h1 className="hero__heading">Gatunki, <span className="hero__heading--special">które słucham</span><span className="hero__heading--special-small">Jest tego całkiem sporo 😎</span></h1>  
                <a className="hero__link" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">Sprawdź mojego spotify</a>
            </div>
        </section> 
        <section className="genres">
            <h2 className="genres__heading">Gatunki</h2>
            <p className="genres__description">Wymieniłem tutaj gatunki, których głównie słucham
            z podziałem na ich podgatunki. Electro House wyodrębniłem z już i tak dużego zestawienia
            muzyki "House", ponieważ dzieli on się również na kolejne podgatunki. Jak widać jest
            tego całkiem sporo. ✌</p>
            <div className="genres__grid">
                <article className="genres-section">
                    <h3 className="genres-section__heading">Big room</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Commercial Big room</li>
                        <li className="genres-list__item">Progressive Big room</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">House</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Bass House</li>
                        <li className="genres-list__item">Disco/Funky House</li>
                        <li className="genres-list__item">Deep House</li>
                        <li className="genres-list__item">Electro House</li>
                        <li className="genres-list__item">Future House</li>
                        <li className="genres-list__item">Progressive House</li>
                        <li className="genres-list__item">Tech House</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Electro House</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Complextro</li>
                        <li className="genres-list__item">Melodic</li>
                        <li className="genres-list__item">Midtempo</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Drum'n'Bass</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">DrumStep</li>
                        <li className="genres-list__item">Jungle</li>
                        <li className="genres-list__item">Liquid</li>
                        <li className="genres-list__item">Neurofunk</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Dubstep</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Chillstep</li>
                        <li className="genres-list__item">Deep</li>
                        
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Trap</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Future Bass</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Dance Music</h3>
                    <ul className="genres-list">
                        <li className="genres-list__item">Club Music</li>
                        <li className="genres-list__item">Pop</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Rap</h3>
                    <p className="genres-section__description"></p>
                    <ul className="genres-list">
                        <li className="genres-list__item">Rap Polski</li>
                    </ul>
                </article>
            </div>
        </section>
    </>
     );
}
 
export default GenresPage;