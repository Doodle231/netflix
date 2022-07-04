const key = process.env.REACT_APP_Movie_API_Key

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, 
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/keyword?api_key=${key}&page=1`,
    rquestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,



}

export default requests