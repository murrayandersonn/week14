import React from 'react';
import Movie from './movie'
import {useState} from 'react'

export default function MovieList() {
    let moviesArray = [
        {
            id: 1,
            title: "Independence Day",
            releaseYear: "1996",
            image: "https://upload.wikimedia.org/wikipedia/en/b/bb/Independence_day_movieposter.jpg",
            cast: ["Will Smith, ", "Bill Pullman, ", "Jeff Goldblum"],
            synopsis: "In the epic sci-fi blockbuster 'Independence Day,' Earth faces an unprecedented threat when a massive alien mothership arrives in orbit on July 2nd. As the world watches in awe and fear, disparate groups of people—including a skeptical President (played by Bill Pullman), a maverick scientist (Jeff Goldblum), and a skilled Air Force pilot (Will Smith)—must come together to devise a plan to combat the extraterrestrial invaders. With cities across the globe under siege and humanity's very survival at stake, the fate of the planet rests on their ability to launch a daring counterattack on July 4th. It's a battle for independence like no other, as Earth fights not just for freedom, but for its very existence against a technologically superior enemy bent on destruction.",
            rating: "PG-13",
        },
        {
            id: 2,
            title: "The Truman Show",
            releaseYear: "1998",
            image: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
            cast: ["Jim Carrey, ", "Ed Harris, ", "Laura Linney"],
            synopsis: "In 'The Truman Show,' Truman Burbank (Jim Carrey) lives an idyllic life in the picturesque town of Seahaven. Unbeknownst to him, his entire existence is a meticulously orchestrated reality television show, with every moment of his life broadcast to a global audience. As Truman begins to notice strange occurrences and inconsistencies in his world, he becomes increasingly suspicious. His curiosity grows into a desperate quest for truth, leading him to unravel the carefully constructed facade that surrounds him. Truman's journey to discover his true identity and break free from the confines of his manufactured existence becomes a poignant exploration of human autonomy, media manipulation, and the search for authenticity in a world consumed by artifice.",
            rating: "PG",
        },
        {
            id: 3,
            title: "The Dark Knight",
            releaseYear: "2008",
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            cast: ["Christian Bale, ", "Heath Ledger, ", "Aaron Eckhart"],
            synopsis: "In 'The Dark Knight,' Gotham City faces a new breed of criminal mastermind in the form of the anarchic Joker (Heath Ledger), who plunges the city into chaos with his ruthless and unpredictable tactics. Batman (Christian Bale), with the help of Lieutenant Jim Gordon (Gary Oldman) and District Attorney Harvey Dent (Aaron Eckhart), strives to dismantle organized crime in Gotham. However, the Joker's escalating series of brutal attacks forces Batman into a moral quandary as he confronts the limits of his own capabilities and the darkness within himself. With Gotham's soul at stake and the Joker's malevolent presence growing ever more pervasive, Batman must navigate a treacherous path to protect the city he has sworn to defend, even if it means risking everything he holds dear.",
            rating: "PG-13",
        },
        {
            id: 4,
            title: "Cars",
            releaseYear: "2006",
            image: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
            cast: ["Owen Wilson, ", "Paul Newman, ", "Bonnie Hunt, ", "Larry the Cable Guy"],
            synopsis: "In 'Cars,' Lightning McQueen (voiced by Owen Wilson), a hotshot rookie race car, finds himself stranded in the small town of Radiator Springs after getting lost on the way to a big race. Frustrated and eager to leave, McQueen gradually learns valuable life lessons from the town's quirky residents, including Doc Hudson (voiced by Paul Newman) and Sally Carrera (voiced by Bonnie Hunt). As he builds friendships and discovers the true meaning of success, McQueen undergoes a transformation that goes beyond racing and fame, teaching him that life's journey is more important than the finish line.",
            rating: "G",
        }];
        
        const [movies, setMovies] = useState(moviesArray)
        
        let reviewsArray = [
            {
                id: 1,
                movie_id: 1,
                stars: '★★★★☆',
                text: 'Very good movie classic sci fi and hacking movie.',
            }
        ]
        const [reviews, setReviews] = useState(reviewsArray)
        //console.log(reviews)
        return (
            <div className='container'>
               {moviesArray.map((movie) =>{
                return (
                   <Movie key={movie.id} movie={movie} reviews={reviews} setReviews={setReviews}/>
                )
            }) 
            };
                
            </div>
        );
    }

