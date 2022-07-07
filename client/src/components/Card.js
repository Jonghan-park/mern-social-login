import React from "react";

function Card({ post }) {
  return (
    <div>
      <span className="title">{post.title}</span>
      <img src={post.img} alt="img" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
}

export default Card;
