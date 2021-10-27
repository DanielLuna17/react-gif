import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp  = () => {

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories] = useState([
      "Dragon Ball",
    ]);

    /* const handleAdd = () => {
        //setCategories([...categories, 'Rick and Morty']);
        setCategories((cate) => [...cate, "Rick and Morty"]);
    } */

    return (
      <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {categories.map((category) => 
            <GifGrid
                key={category} 
                category= {category} 
            />
          )}
        </ol>
      </>
    );

};

export default GifExpertApp;
