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
        console.log("verif" + response.data);
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
      <h1>POKEMON</h1>
      <div className="presentation"></div>
      {data.types.map((typeOfPokemon, index) => {
        // console.log(typeOfPokemon);
        console.log(typeOfPokemon.type.name);

        // console.log(data.sprites.front_default);

        const typePokemon = data.sprites.front_default;
        //  console.log(typePokemon);

        return (
          <div key={index}>
            {typeOfPokemon.slot === 1 && (
              <div
                className="
            item"
              >
                <p> {data.name}</p>
                <img src={typePokemon} alt="typePokemon" />
              </div>
            )}

            <Link to={`pokemon/${typeOfPokemon.type.name}`}>
              {typeOfPokemon.type.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Nomdupokemon;
