import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Typepokemon = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>{data.name}</h1>
      <section>
        {data.pokemon.map((elem) => {
          return (
            <div key={elem.pokemon.name}>
              <p>{elem.pokemon.name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Typepokemon;
