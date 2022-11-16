import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import { useState, useEffect, lazy, Suspense } from "react";
import dataContext from "./Context/data";
import GetServices from "./Api/GetServices";
import Footer from "./Components/Footer/Footer";
import {
  PageFilmsFilter,
  PageTopFilms,
  PageSearchActor,
  PageSearchFilms,
  PageHome,
  PageFilm,
} from "./Page";
import style from "./app.module.scss";

const Page404 = lazy(() => import("./Page/PageErrors/PageEror"));

function App() {
  const [data, setData] = useState([]);
  const [allValues, setAllValues] = useState({})

  async function GetTopPost (){
    const data  = await GetServices.getTopFilms()
    setData(data.films)
  }

  useEffect(()=>{
    GetTopPost()
  },[])

  return (
    <div className={style.container}>
      <dataContext.Provider value={data}>
        <Router>
          <div className={style.link_wrapper}>
          <div className={style.wrapper_link}>
            <Link className={style.link} to="/">
              Home
            </Link>
          </div>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/"  element={<PageHome setAllValues = {setAllValues} />} />
              <Route path="/pagesearchactor/:actor" element={<PageSearchActor />} />
              <Route path="/pagesearchfilms/:film" element={<PageSearchFilms />} />
              <Route path="/pagetopfilms" element={<PageTopFilms />} />
              <Route path="/pagefilmsfilter" element={<PageFilmsFilter allValues = {allValues} />} />
              <Route path="/pagetopfilms/film/:id" element={<PageFilm />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
          </div>
          <Footer/>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
