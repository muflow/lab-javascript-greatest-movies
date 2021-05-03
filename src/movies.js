// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map((movie) => {
        return movie.director;
    });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
    const newMoviesArray = moviesArray.filter((movie) => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

    return newMoviesArray.length;
  };
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function round(number, decimals) {
    return parseFloat(number.toFixed(decimals))
}

function ratesAverage(movies) {
    const rates = movies.map((movie) => movie.rate || 0);

    const sum = rates.reduce((acum,rate) => acum + rate, 0);
    const avg = sum / rates.length;

    return round(avg, 2) || 0 ; //En el caso que el resultado no sea un numero, devolvemos 0.
}

console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const moviesDrama = movies.filter((movie) => movie.genre.includes("Drama"))
    return ratesAverage(moviesDrama);
}

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    const newArray = movies.map((movie) => movie);
    return newArray.sort((a, b) =>{
        if (a.year - b.year === 0){
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
 
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 const orderAlphabetically = moviesArray => {
    const movieTitles = moviesArray.map(movie => movie.title);

    movieTitles.sort((movie1, movie2) => movie1.localeCompare(movie2));

    return movieTitles.slice(0, 20);

  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// convertir para hacer minutos. separar oras i minutos split() ´´´> array dos elementos horas y minutosparseInt() para pasar de strings a numeros, luego hacemos un REDUCE del array min, min
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        let duration;
        if (!movie.duration.includes('min')) {
            duration = +movie.duration[0] * 60;
        } else if (!movie.duration.includes('h')) {
            if (movie.duration.length === 4) {
                duration = +movie.duration[0];
            } else if (movie.duration.length === 5) {
                duration = +movie.duration[0] * 10 + +movie.duration[1];
            }
        } else if (movie.duration.length === 7) {
            duration = +movie.duration[0] * 60 + +movie.duration[3];
        } else if (movie.duration.length === 8) {
            duration = +movie.duration[0] * 60 + +movie.duration[3] * 10 + +movie.duration[4];
        }
        return {
            ...movie,
            "duration": duration,
        }
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

