import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      {data.types.map((type) => {
        console.log(type);
        return (
          <>
            <button>{type.types}</button>
          </>
        );
      })}
    </div>
  );
};

export default Nomdupokemon;
