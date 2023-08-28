import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Type = () => {
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
      <div className="presentation">
        {data.results.map((typespokemon, index) => {
          console.log(typespokemon);
          return (
            <div className="item" key={index}>
              <Link to={`/type/${typespokemon.name}`}>{typespokemon.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Type;
