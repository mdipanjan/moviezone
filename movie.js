class Movie{
    constructor(){
        this.client_key = '36cf91c6';
    }

    async getMovie(mov){
        const movies = await fetch(` http://www.omdbapi.com/?t=${mov}&apikey=${this.client_key}`);

        const movieName = await movies.json();

        return{
            movieName
        }

    }
}




























//   http://www.omdbapi.com/?t=snowden&apikey=36cf91c6  