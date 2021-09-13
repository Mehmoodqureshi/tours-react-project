import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTours }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tor-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "read less" : "read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
