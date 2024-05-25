//Creating class Movie
class Movie {
    //creating constructor

    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    //for rating = PG if ratings is not mentioned
    if (typeof this.rating === 'undefined') {
    this.rating = 'PG';
    }
    }
   }
   //creating instance of class Movie

   let movie1 = new Movie('LEO', 'Screen7');
   let movie2 = new Movie('Avatar2', 'gold', '5');
   let movie3 = new Movie('Fightclub1999', 'silver', '5');
   let movie4 = new Movie('Master', 'platinum');
   console.log(movie1)

    //function to get title list if rating = PG

   function getPG(movie) {
    let res = []
    for (let i = 0; i < movie.length; i++) {
   if (movie[i].rating == 'PG') {
    res.push(movie[i].title);
    }
    }
    return res;
   }
   let arr = [movie1, movie2, movie3, movie4]
   console.log(getPG(arr))

    //creating instance of class Movie

   let movie5 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
   console.log(movie5);