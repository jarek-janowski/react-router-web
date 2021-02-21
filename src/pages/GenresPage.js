import '../styles/GenresPage.scss'
import '../styles/Hero.scss'
import Hero from '../components/Hero'
import GenresList from '../components/GenresList'

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
            tego całkiem sporo. Do każdego gatunku zamieściłem 30 sekundowy odsłuch ✌</p>
            <div className="genres__grid">
                <GenresList />
            </div>
        </section>
    </>
     );
}
 
export default GenresPage;