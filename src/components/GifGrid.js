import React, {/*  useState, useEffect */ } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /* const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then( setImages )
  }, [ category ]); */

  const {data:images, loading} = useFetchGifs( category );

  
  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>

      {/* loading ? 'Cargando...' : 'Data cargada' */}

      {loading && <p className="animate__lightSpeedInLeft"> Loading </p>}

      {
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};
