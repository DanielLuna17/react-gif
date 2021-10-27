import React from 'react'

export const GifGridItem = ( { title, url} ) => {
    
    return (
      <div className="card animate__animated animate__fadeInDown">
        <img src={url} alt={title}  loading="lazy"/>
        <p>{title}</p>
      </div>
    );
}
