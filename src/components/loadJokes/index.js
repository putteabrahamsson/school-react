import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const LoadJoke = () => {
  const [joke, setJoke] = useState([]);

  const loadFromApi = async () => {
    const options = {
      method: "GET",
      url:
        "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      headers: {
        accept: "application/json",
        "x-rapidapi-key": "1bdbc91fbfmsh0d09ccad6062d15p159e3djsn9c9dfe2e0175",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let obj = {
          joke: response.data.value,
          icon: response.data.icon_url,
          key: response.data.key,
        };

        setJoke(obj);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    loadFromApi();
  }, []);

  return (
    <div className="container">
      {joke && (
        <>
          <img
            className="image"
            src={joke.icon}
            width="150"
            height="150"
            alt="Chuck Norris"
          />
          <p>{joke.joke}</p>
        </>
      )}
    </div>
  );
};

export default LoadJoke;
