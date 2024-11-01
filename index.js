var searchBtn = document.getElementById("search-btn");
var movieNameElemnt = document.getElementById("movie-name")
var movieContainer = document.getElementById("container")

var movieStatus  = document.getElementById("status")


searchBtn.addEventListener("click" , function(){
    movieContainer.innerHTML= ""
    movieStatus.innerText = "Loading............"
   if(movieNameElemnt.value == ""){
    movieStatus.innerText = ""
    alert("Please type movie name")
   }else{
    movieStatus.innerText = ""
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameElemnt.value}`) 
   .then( (res) =>{
    if(res.data.Response == "True"){
        movieStatus.innerText = ""
       let movies = res.data.Search
        movies.map( (movie,index) => {
           
            movieContainer.innerHTML+=
            `
            
   
    <div class="movie-card">
        <img class="movie-thumbnail"
         src="${movie.Poster }"/>
         <div class="movie-details-wrapper">
         <p> <b>Title : ${movie.Title } </b></p>
         <p> <b>Relese Year : ${movie.Year} </b></p>
         <p> <b> Type : ${movie.Type} </b> </P>
        </div>
    </div>`
        })
    }else{
        movieStatus.innerText = ""
        movieStatus.innerText=`404 movies Not Found`
    }

   })
   }
    
})