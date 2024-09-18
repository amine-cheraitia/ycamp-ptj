import React, { useState, useEffect } from "react";

function SportList(){
  const [sports, setSports] = useState([]);

  useEffect(() => {
        fetch("http://127.0.0.1:8000/api/typesportsfield")
        .then((response) => response.json())
        .then((data) => {
            setSports(data)
        });
    }, []);
};

export default SportList;