class View {
    constructor(){
        this.view = document.getElementById('view');
        this.back = document.querySelector('.back');
    }
    showMovie(movie){
        console.log(movie);
        if(!movie.Ratings[1] || !movie.Ratings[2]){
            this.view.innerHTML=`<div class="container">
                        <div class="row">
                    
                            <img class=" first col-sm-12 col-md-5" src="${movie.Poster}" alt="">
                    
                        <div class=" second col-sm-12 col-md-7">

                        <h2 class="title text-center">${movie.Title}</h2>
                    
                        <hr>
                        <ul class="list-group">
                            
                        <li class="list-group-item">Genre: ${movie.Genre}.</li>
                        <li class="list-group-item">Actors: ${movie.Actors}. </li>
                        <li class="list-group-item">Director:${movie.Director}.</li>
                        <li class="list-group-item">Awards: ${movie.Awards}.</li>
                        <li class="list-group-item">Release Date: ${movie.Released}.</li>
                        <li class="list-group-item">Box Office: ${movie.BoxOffice}.</li>
                        <li class="list-group-item">
                            <p>
                            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plot
                            </a>
                                
                            </p>
                            <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                            ${movie.Plot}.
                            </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span>
                                
                            </span>
                        </li>
                        
                        </ul>




                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Imdb Rating:
                            <span class="badge badge-primary badge-pill">${movie.Ratings[0].Value}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Rotten Tomatoes Rating:
                            <span class="badge badge-primary badge-pill">${''}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Metacritic Rating:
                            <span class="badge badge-primary badge-pill">${''}</span>
                        </li>
                        </ul>
                    
                </div>
            </div>
        `;
        }else{
            this.view.innerHTML=`<div class="container">
                        <div class="row">
                    
                            <img class=" first col-sm-12 col-md-5" src="${movie.Poster}" alt="">
                    
                        <div class=" second col-sm-12 col-md-7">

                        <h2 class="title text-center">${movie.Title}</h2>
                    
                        <hr>
                        <ul class="list-group">
                            
                        <li class="list-group-item">Genre: ${movie.Genre}.</li>
                        <li class="list-group-item">Actors: ${movie.Actors}. </li>
                        <li class="list-group-item">Director:${movie.Director}.</li>
                        <li class="list-group-item">Awards: ${movie.Awards}.</li>
                        <li class="list-group-item">Release Date: ${movie.Released}.</li>
                        <li class="list-group-item">Box Office: ${movie.BoxOffice}.</li>
                        <li class="list-group-item">
                            <p>
                            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plot
                            </a>
                                
                            </p>
                            <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                            ${movie.Plot}.
                            </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span>
                                
                            </span>
                        </li>
                        
                        </ul>




                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Imdb Rating:
                            <span class="badge badge-primary badge-pill">${movie.Ratings[0].Value}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Rotten Tomatoes Rating:
                            <span class="badge badge-primary badge-pill">${movie.Ratings[1].Value}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        Metacritic Rating:
                            <span class="badge badge-primary badge-pill">${movie.Ratings[2].Value}</span>
                        </li>
                        </ul>
                    
                </div>
            </div>
        `;
        }
        
        
      this.back.style.backgroundImage=`url(${movie.Poster})`;
    }

}