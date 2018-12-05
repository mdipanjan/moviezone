//Init Movie class

const movie = new Movie;


//INIT THE VIEW CLASS

const view = new View;

const searchMovie = document.getElementById('searchMovie');

searchMovie.addEventListener('click',(e) => {
    const mov = document.getElementById('movieName').value;
    if(mov !== ''){
        // console.log(mov);

        movie.getMovie(mov)
        .then(result =>{

            if(result.movieName.Response === 'False'){
                console.log('Movie Not Found');

            }else{

          
                //console.log(result.movieName);
                view.showMovie(result.movieName);
                // console.log(result);
            }
            

        })



    }
   
});
