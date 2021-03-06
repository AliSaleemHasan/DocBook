import React from "react";
import Header from "../header/Header";
import "./Search.css";
import { searchImages } from "./dummyData";
import Map from "../map/Map";
function Search() {
  console.log(searchImages);
  return (
    <div className="search">
      <Header />
      <div className="search__container">
        <div className="search__header">
          <h1>Search Result</h1>
          <p>
            Searched by: <span className="blue__important">Category</span>
          </p>
        </div>
        <div className="search__resultContainer">
          <div className="search__result">
            {searchImages.map((image, index) => (
              <img
                alt={index}
                key={index}
                src={image}
                width={190}
                height={150}
              />
            ))}
          </div>
          <div className="search__map">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
