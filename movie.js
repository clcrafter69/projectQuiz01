//create movie object


var title = document.getElementById("movie-title"),
    director = document.getElementById("movie-direct"),
    writer = document.getElementById("writer"),
    star = document.getElementById("star"),
    addButton =document.getElementById("show-button"),
    displayList =document.getElementById("movie-list"),
    movieList = [];

var Movie = function Movie(title, director, writer, star){

    this.title = title;
    this.director = director;
    this.writer =writer;
    this.star = star;
   // this.rating =
   

    this.movieInfo = function movieInfo()
    {
        return "Title: " + this.title + "\n " + "Director: " + this.director + "\n" +  "Writer: " + this.writer + "\n" + "Star " + this.star;
    }  
}


 var createMovieList = function createMovieList(Movie){
        displayList.innerText = "";
        displayList.innerText = Movie.movieInfo();
    }

addButton.addEventListener("click", function()
{
    var newMovie = new Movie(title.value,director.value,writer.value,star.value);
    // movieList.push(newMovie);
    createMovieList(newMovie);
});