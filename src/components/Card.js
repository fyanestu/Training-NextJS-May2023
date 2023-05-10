import React, { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.thumbnail
 * @param {String} props.title
 * @param {String} props.description
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card(props) {
  let { id, title, thumbnail, description } = props;
  const [loading, setLoading] = useState(false);
  function addToCart() {
    // Call service / API
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    clearTimeout();
  }
  return (
    <section className="w-auto min-w-[200px] bg-white rounded-xl app-card">
      <div className="app-card-img">
        <img
          src={thumbnail}
          alt="thumbnail-card"
          className="card-img__images"
        />
      </div>

      {props?.children}

      <div className="p-4 w-full">
        <h3 className="text-black">{title}</h3>
        <p className="text-black">{description}</p>
        <div>
          <button onClick={addToCart}>
            {loading ? "Loading..." : "Add to card"}
          </button>
        </div>
      </div>
    </section>
  );
}
