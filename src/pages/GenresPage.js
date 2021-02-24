// import '../styles/GenresPage.scss'
// import '../styles/Hero.scss'
import Hero from '../components/Hero'
import GenresList from '../components/GenresList'
import {NavLink} from 'react-router-dom'

const GenresPage = () => {
    return (
        <>
        <Hero 
            className="hero--genres"
            titleUpper="Gatunki"
            titleLower="które słucham"
            subtitle="Trochę tego jest 😎"
        />
        <section className="genres">
            <h2 className="genres__heading">Gatunki</h2>
            <p className="genres__description">Wymieniłem tutaj gatunki, których głównie słucham
            z podziałem na ich podgatunki. Electro House wyodrębniłem z już i tak dużego zestawienia
            muzyki "House", ponieważ dzieli on się również na kolejne podgatunki. Jak widać jest
            tego całkiem sporo. Do każdego gatunku zamieściłem swoje <NavLink className="who-am-i__description--link" to="top5">top5</NavLink>✌. Oczywiście, 
            to tylko wierzchołek góry lodowej, bo nawet nie dzieliłem tego na podgatunki i dosłownie masę,
            utworów pominąłem, więc zachęcam ponownie do sprawdzenia mojego <a className="who-am-i__description--link" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/jaro935?si=tvec8xsfSUKYDLzKMqGXUg">spotify</a>, 
            jeśli kogoś zainteresuje temat.</p>
            <div className="genres__grid">
                <GenresList />
            </div>
        </section>
    </>
     );
}
 
export default GenresPage;