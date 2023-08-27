import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
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
      {data.results.map((pokemonlist, index) => {
        console.log(pokemonlist);
        //  console.log("test " + index.toString());
        const newindex = index + 1;
        const newimgpokemon =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/XXX.png".replace(
            "XXX",
            newindex.toString()
          );

        console.log("newimgpokemon" + newimgpokemon);
        return (
          <Link to={`/pokemon/${pokemonlist.name}`}>
            <article key={pokemonlist.name}>
              <p> {pokemonlist.name}</p>
              <img src={newimgpokemon} />
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Pokemon;
