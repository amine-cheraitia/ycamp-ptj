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

    // Make a table of sports
    {sports && sports.map((sport) => {
        return (
          <li key={sport.type_sports_field_id}>
            id = {sport.type_sports_field_id} <br/> Type = {sport.type_of_sport_field}<br/><br/>    
          </li>
        );
      })}

    console.log(sports)

  return (
    <ul>
      {sports && sports.map((sport) => {
          return (
            <li key={sport.type_sports_field_id}>
              id = {sport.type_sports_field_id} <br/> Type = {sport.type_of_sport_field}<br/><br/>    
            </li>
          );
        })}
    </ul>
  );
};

export default SportList;