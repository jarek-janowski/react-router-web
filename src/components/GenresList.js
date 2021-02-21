import React, { Component } from 'react';

class GenresList extends Component{
    state ={
        genres: [
        {
            id: 0, 
            genreName: "Big room",
            subgenres: ["Commercial Big room", "Progressive Big room"],
        },
        {
            id: 1, 
            genreName: "House",
            subgenres: ["Bass House", "Disco/Funky", "Deep House", "Future House", "Progressive House", "Tech House"],
        },
        {
            id: 2, 
            genreName: "Electro House",
            subgenres: ["Complextro", "Melodic", "Midtempo"],
        },
        {
            id: 3, 
            genreName: "Drum'n'Bass",
            subgenres: ["Drumstep", "Jungle", "Liquid", "Neurofunk"],
        },
        {
            id: 4, 
            genreName: "Dubstep",
            subgenres: ["Chillstep", "Deep"],
        },
        {
            id: 5, 
            genreName: "Trap",
            subgenres: ["Future Bass"],
        },
        {
            id: 6, 
            genreName: "Dance Music",
            subgenres: ["Club Music", "Pop"],
        },
        {
            id: 7, 
            genreName: "Rap",
            subgenres: ["Rap Polski"],
        },

    ]
    }
    render(){
        return ( 
            this.state.genres.map(({id, genreName, subgenres}) =>(
                <article key={id} className="genres-section">
                <h3 className="genres-section__heading">{genreName}</h3>
                <ul className="genres-list">
                {subgenres.map((subgenre, i) => <li key={i} className="genres-list__item">{subgenre}</li>)}
                </ul>
            </article>
            ))
         );
    }
}

export default GenresList

