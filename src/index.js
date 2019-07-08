import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71YmwMFshBL.jpg"
    alt="Notes from the Upside Down"
  />
);

const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "maroon" }}>Notes from the Upside Down</h1>
);
const authorStyle = {
  letterSpacing: "10px",
  color: "green"
};

const Author = () => <p style={authorStyle}>by Guy Adams</p>;

ReactDom.render(
  <Books />,
  document.getElementById("root")
);
