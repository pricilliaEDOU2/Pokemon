import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Nomdupokemon = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
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
    <p>Loading ...</p>
  ) : (
    <div>
      <p> {data.name}</p>

      {data.types.map((typeOfPokemon, index) => {
        console.log(typeOfPokemon);
        console.log(typeOfPokemon.slot);
        // console.log(data.sprites.back_default);
        console.log(data.sprites.front_default);

        const typePokemon = data.sprites.front_default;
        console.log(typePokemon);

        return (
          <div key={index}>
            <Link to={`pokemon/${typeOfPokemon}`}>
              {typeOfPokemon.type.name}
            </Link>
            {typeOfPokemon.slot === 1 && (
              <img src={typePokemon} alt="typePokemon" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Nomdupokemon;
