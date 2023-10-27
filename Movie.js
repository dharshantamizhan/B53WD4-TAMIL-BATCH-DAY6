class movie{
    constructor(title,studio,rating = "PG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

getPg(movies){
    return movies.filter(movie => movie.rating === "PG");
}
}
const casinoRoyale = new movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale)
