import React, { useState } from "react";
import axios from 'axios';
import BookDetail from '../component/BookDetail';

function Search() {

  const [word, setWord] = useState([])
  const [result, setResult] = useState([])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.get("https://se-book-store.herokuapp.com/api/v1/books")
    .then((response) => {
      setResult(response.data);
    })
  }

  return (
    <>
      <div className="container">
          <br></br>
          <br></br>
        <h1 className="text-center">SE Book Store</h1>
        <h4 className="text-center">ค้นหาหนังสือจากชื่อหรือตัว ISBN ด้วย API </h4>
        <div className="text-name">
            <br></br>
            create by สุพัตตา อยู่พิพัฒน์ 624259031 62/45
        </div>
        <br></br>
        <br></br>
        <form onSubmit={handleFormSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setWord(e.target.value)}
              className="form-control"
              type="text"
              placeholder="ค้นหาหนังสือจากชื่อหรือตัว ISBN ..."/>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-btn">
                ค้นหา
              </button>
            </div>
          </div>
        </form>
      </div>
      <BookDetail id={result} search={word} />
    </>
  )
}

export default Search;