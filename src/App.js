import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from './components/footer/Footer';
import Carousel from './components/Carousel';
import CardContainer from './components/CardContainer';
import RowContainer from './components/RowContainer';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {

  const booksImgUrls = [];
  for (let i = 1; i <= 10; i++) {
    booksImgUrls.push(process.env.PUBLIC_URL + `/images/books/book${i}.jpg`);
  }

  const mobilesImgUrls = [];
  for (let i = 1; i <= 10; i++) {
    mobilesImgUrls.push(process.env.PUBLIC_URL + `/images/mobiles/m${i}.jpg`);
  }
  for (let i = 1; i <= 10; i++) {
    mobilesImgUrls.push(process.env.PUBLIC_URL + `/images/mobiles/m${i}.jpg`);
  }

  return (
    <div>
      <SearchBar/>
      <NavBar/>
      <Carousel />
      <CardContainer />
      <RowContainer heading="Top Sellers in Books for you" imgUrls={booksImgUrls} />
      <RowContainer heading="Popular products in Wireless internationally" imgUrls={mobilesImgUrls} />
      <RowContainer heading="Top Sellers in Books for you" imgUrls={booksImgUrls} />
      <Footer />

    </div>
  );
}

export default App;
