import React, { Component } from 'react';
// import '../styles/Top5Page.scss'
import Hero from '../components/Hero'
import Top5List from '../components/Top5List'
import fetchJsonp from 'fetch-jsonp'

const API = "https://api.deezer.com/user/1722709682/playlists?output=jsonp"

class Top5Page extends Component {
    state ={
        userPlaylistsData: [],
    }

    componentDidMount(){
        fetchJsonp(API)
        .then(response => response.json())
        .then(data => {
            // console.log(data.data)
            this.setState({
                userPlaylistsData: data.data,
            })
        })
        .catch(error => console.log(error))
    }
    
    render(){
        
        const {userPlaylistsData} = this.state;

        return (
            <> 
            <Hero 
                className="hero--top5"
                titleUpper="Top5"
                titleLower="z każdego gatunku"
                subtitle="Ciężko było sie zdecydować..."
            />
            <section className="top5">
                <h2 className="top5__heading">Top 5</h2>
                <p className="top5__description"> Zestawienie 5 najlepszych utworów w słuchanych przeze mnie 
                gatunkach, oczywiście nie możliwe było wybranie tylko pięciu, ale zrobiłem co mogłem..
                Do przesłuchania na Deezerze po kliknięciu w obrazek przekieruje Cię do playlisty.
                Zestawienie będzie zawsze aktualna dzięki wykorzystaniu API od Deezera 😇</p>
                <div className="top5__grid">
                    {userPlaylistsData ? <Top5List userPlaylistsData={userPlaylistsData}/> : userPlaylistsData}
                </div>
            </section>
            </> 
        );
    }
}

export default Top5Page;