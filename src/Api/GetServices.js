class GetServices {
  static async getTopFilms() {
    try {
      const response = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4acf48af-7dd2-4edf-ba48-e409a52a90cb",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async getFilm(id){
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4acf48af-7dd2-4edf-ba48-e409a52a90cb",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    }catch (e) {
      console.error(e);
    }
  }

  static async getSearchFilm(string){
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${string}&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4acf48af-7dd2-4edf-ba48-e409a52a90cb",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data.films;
    }catch (e) {
      console.error(e);
    }
  }

  

  static async getFilterFilm(minRaiting = 0, maxRaiting = 10, minYear = 1000, maxYear = 3000, string = ''){
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=${minRaiting}&ratingTo=${maxRaiting}&yearFrom=${minYear}&yearTo=${maxYear}&keyword=${string}&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4acf48af-7dd2-4edf-ba48-e409a52a90cb",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data.items;
    }catch (e) {
      console.error(e);
    }
  }
  
  static async getSearchActor(name){
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v1/persons?name=${name}&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4acf48af-7dd2-4edf-ba48-e409a52a90cb",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data.items;
    }catch (e) {
      console.error(e);
    }
  }
}
export default GetServices;
