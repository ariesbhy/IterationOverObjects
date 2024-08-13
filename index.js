/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

let person = {
  name: "Basmah",
  age: 27,
  city: "Ali Sabah Al Salem",
};
console.log(person);

/******************************
Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "basmahfarhan97@icloud.com";
console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const hasKey = (object, key) => {
  if (object[key] == undefined) {
    return false;
  } else {
    return true;
  }
};

console.log(hasKey(person, "email"));

////////////////////

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/

const printMovieTitle = (movies) => {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
};

printMovieTitle(movies);
/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
const count1994MoviesForEach = (movies) => {
  let count = 0;
  movies.forEach((movie) => {
    if (movie.year == 1994) {
      count = count + 1;
    }
  });

  return count;
};

console.log(count1994MoviesForEach(movies));

const count1994MoviesFilter = (movies) => {
  let movies1994 = movies.filter((movie) => {
    if (movie.year == 1994) {
      return true;
    } else {
      return false;
    }
  });

  return movies1994.length;
};

console.log(count1994MoviesFilter(movies));

/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/

const modiffyDarkKnight = (movies) => {
  let modifiedMovies = movies.map((movie) => {
    if (movie.title == "The Dark Knight") {
      movie.genre = "Action/Drama";
      return movie;
    } else {
      return movie;
    }
  });

  return modifiedMovies;
};
console.log(modiffyDarkKnight(movies));

/******************************
      Q7) (Challenge)
      Write a function groupMoviesByGenre that accepts an array of movie objects. 
      The function should return an object where the keys are movie genres 
      and the values are arrays of movie titles that belong to those genres. 
  ********************************/

//{
// Drama: ["The Shawshank Redemption"],
// Crime: ["The Godfather"],
//  Action: ["The Dark Knight"],
// };
