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
function ratesAverage(movies){
    if (movies.length === 0){
        return 0;
    } else {
        const sumRates = movies.reduce((acc, movie) => {
            return acc + parseInt(movie.rate, 10);
        },0);
        const numRates = movies.length;
        return parseFloat((sumRates / numRates).toFixed(2));
        return sumeRates;
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter((movie) => {
        return movie.genere.includes('Drama')
    })
    return ratesAverage(dramaMovies); 
}

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
/*
function stringTominutes(movies){
    movies.for.Each() ... vedi screen shot
}

*/

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
