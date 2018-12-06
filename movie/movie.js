class Movie{
    constructor(){
        this.client_key = '36cf91c6';
    }

    async getMovie(mov){
        
        let apiPath = 'https://www.omdbapi.com/?t';
        const movies = await fetch(` ${apiPath}=${mov}&apikey=${this.client_key}`);

        const movieName = await movies.json();

        return{
            movieName
        }

    }
}




























//   http://www.omdbapi.com/?t=snowden&apikey=36cf91c6  