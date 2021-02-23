import React, { Component } from 'react';
import '../styles/Top5Page.scss'
import Hero from '../components/Hero'
import Top5List from '../components/Top5List'
import fetchJsonp from 'fetch-jsonp'

class Top5Page extends Component {
    state ={
        playlistData: null
    }
// Zrobić Fetch, z ktorego wyciagnac mapem link do playlist i ponownie zfeczowac
    componentDidMount(){
        fetchJsonp('https://api.deezer.com/user/1722709682/playlists?output=jsonp')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                playlistData: data.data
            })
        })
        .catch(error => console.log(error));
    
    }
    render(){
        const {playlistData} = this.state;
        return (
            <> 
            <Hero 
                className="hero--top5"
                titleUpper="Top5"
                titleLower="z gatunków"
                subtitle="Ciężko było sie zdecydować..."
            />
            <section className="top5">
                <div className="top5__grid">
                    {/* <Top5Fetch click={this.handleDataFetch}/> */}
                    {playlistData ? <Top5List playlistData={playlistData}/> : playlistData}
                </div>
            </section>
            </> 
        );
    }
}

export default Top5Page;