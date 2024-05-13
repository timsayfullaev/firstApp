'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        'count': numberOfFilms,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': false
    };

