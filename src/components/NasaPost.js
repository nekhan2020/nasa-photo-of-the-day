import React from "react";

const Nasapost = (props) => {
  const { title, link, date, media, explanation, author } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {media === "image" ? (
        <img src={link} alt={title} />
      ) : (
        <iframe src={link} title={title} />
      )}
      <p>{explanation}</p>
      <p>{author}</p>
    </div>
  );
};

export default Nasapost;
