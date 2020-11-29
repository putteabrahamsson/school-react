import React, { useEffect, useState } from "react";
import "./displayNameStyle.css";

const DisplayName = ({ obj }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(obj);
  }, [obj]);

  return (
    <div>
      {names &&
        names.map((name, index) => (
          <div key={index} className="displayNameDiv">
            <p>{name.name} </p>
          </div>
        ))}
    </div>
  );
};

export default DisplayName;
