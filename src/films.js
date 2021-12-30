// bucles en ES6 (usant map, reduce, filter i sort)

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => film.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(film => film.director == director)
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalScore = getMoviesFromDirector(array, director).reduce((total,film) => {
    total += film.score
    return total
  },0)
  let average = (totalScore/getMoviesFromDirector(array, director).length).toFixed(2)
  return Number(average)
}
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(film => film.title)
  titles.sort()
  return titles.slice(0,20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortPerYear = [...array].sort((a,b) => a.title > b.title ? 1 : -1)
  sortPerYear.sort((a,b) => a.year - b.year )
  return sortPerYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categoryFilms = array.filter(film => film.genre.includes(category) && film.score)
  let scoreCategory = categoryFilms.reduce((total, film) => {
    total += film.score;
    return total
  }, 0)
  return Number((scoreCategory/categoryFilms.length).toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = array.map(film => {
    return{
      ...film,
      'duration': durationInMinutes(film.duration)
    } 
  })
  return newArray
}

function durationInMinutes(duration) {
  let hourAndMin = [];
  if (duration.includes('h')){
      hourAndMin.push(Number(duration.slice(0,duration.indexOf('h')))*60)
      duration = duration.substring(duration.indexOf('h')+1)
    }
  if (duration.includes('min')){
    hourAndMin.push(Number(duration.slice(0,duration.indexOf('min'))));
  }
  duration = hourAndMin.reduce((total,time) => {
    total += time;
    return total
  },0);
  return duration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter(film => film.year == year);
  if(filmsOfYear.length === 0){
    return 'There is no movie from this year'
  } else {
    filmsOfYear.sort((a,b) => a.score > b.score ? -1 : 1);
    return [filmsOfYear[0]];
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
