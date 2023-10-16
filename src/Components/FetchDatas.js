import React, { useState, useEffect } from 'react';

function FetchDatas() {
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDatas(data.quotes.slice(0, 10))
      })
      .catch((error)=>{
        console.error("error :", error)
      })
  }, []);


  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {datas.map((quote) => (
          <li key={quote.id}>
            <h1>{quote.quote}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDatas;
