import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <h1>Types</h1>
      {data.results.map((typespokemon) => {
        console.log(typespokemon);
        return <button>{typespokemon.name}</button>;
      })}
    </div>
  );
};

export default Types;
