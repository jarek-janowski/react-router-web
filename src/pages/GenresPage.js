import '../styles/GenresPage.scss'
import '../styles/Hero.scss'
import Hero from '../components/Hero'

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
                <article className="genres-section">
                    <h3 className="genres-section__heading">Big room</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/0DQDpCo068GxNajdQ9YbK3?si=czE9z2GxSWCPZEfYqDfkfA" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">Commercial Big room</li>
                        <li className="genres-list__item">Progressive Big room</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">House</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/66gN2X2yIMR51Y2jRkJROa" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
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
                    {/* <iframe src="https://open.spotify.com/embed/track/1YuSFOIqLm1AiihkxZPB2d?si=XLtXhBxKQcu7ow2nsmwpwg" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">Complextro</li>
                        <li className="genres-list__item">Melodic</li>
                        <li className="genres-list__item">Midtempo</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Drum'n'Bass</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/0PcK85cjph8L3mTWmdpEMC?si=BI1Ij4vbTX-Nuf0Fl2-RaA" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">DrumStep</li>
                        <li className="genres-list__item">Jungle</li>
                        <li className="genres-list__item">Liquid</li>
                        <li className="genres-list__item">Neurofunk</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Dubstep</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/2TSCKsGHdDFiN2HpuAIeVZ?si=h3ojKIxZSEaRFaX_F43qhg" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">Chillstep</li>
                        <li className="genres-list__item">Deep</li>
                        
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Trap</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/3W2ZcrRsInZbjWylOi6KhZ?si=0Dmr8w5eTZevMRAS6DgVFw" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">Future Bass</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Dance Music</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/7EVk9tRb6beJLTHrg6AkY9?si=JjPvC3xgTIC9HAEu_ZYBjw" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
                    <ul className="genres-list">
                        <li className="genres-list__item">Club Music</li>
                        <li className="genres-list__item">Pop</li>
                    </ul>
                </article>
                <article className="genres-section">
                    <h3 className="genres-section__heading">Rap</h3>
                    {/* <iframe src="https://open.spotify.com/embed/track/2WiNuGZ8zSMYxBRI2QmEb1?si=_UbT9GJQQHKSDOkTetYVVw" width="240" height="80" frameBorder="0" allow="encrypted-media"></iframe> */}
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