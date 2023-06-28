import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../SCSS/flex.scss";
import { Button } from "./Button";

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    id: 0,
    name: "",
    body: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const jsonData = await response.json();
      const mappedUsers = jsonData.map((user) => ({
        name: user.name,
        id: user.id,
        body: user.body,
      }));

      setUsers(mappedUsers);

      const initialData = {
        id: 0,
        name: mappedUsers[0].name,
        body: mappedUsers[0].body,
      };
      setData(initialData);
    } catch (error) {
      console.log("There is an error:", error);
      const errorMessage =
        "Cannot retrieve testimonials. Please check your network connection.";
      setData({ body: errorMessage });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onButtonRight = () => {
    setData((prevData) => {
      const nextId = prevData.id + 1;
      if (nextId < users.length) {
        return {
          id: nextId,
          name: users[nextId].name,
          body: users[nextId].body,
        };
      } else {
        return prevData;
      }
    });
  };

  const onButtonLeft = () => {
    setData((prevData) => {
      const prevId = prevData.id - 1;
      if (prevId >= 0) {
        return {
          id: prevId,
          name: users[prevId].name,
          body: users[prevId].body,
        };
      } else {
        return prevData;
      }
    });
  };
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10rem",
    gap: "1rem",
    marginBottom: "2rem",
  };
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const textStyle = {
    width: "50rem",
    color: "#14274a",
    fontSize: "1.8rem",
    // fontWeight: 600,
    fontFamily: "Montserrat",
    lineHeight: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // gap: "1rem",
  };
  const text = {
    fontSize: "1.5rem",
    fontWeight: "500",
  };

  const buttonStyle = {
    width: "3rem",
    height: "3rem",
  };
  return (
    <div style={container}>
      <div style={textStyle} className="testimonial-container">
        <h2>Testimonials</h2>
        <div style={textStyle}>"{data.body}" </div>
        <div style={text}>{data.name}</div>
        <div style={style}>
          <button onClick={onButtonLeft} style={buttonStyle}>
            {"<"}
          </button>
          <button onClick={onButtonRight} style={buttonStyle}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
