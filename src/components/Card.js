import { Link } from "react-router-dom";
import React ,{ useState, useEffect } from 'react';
import axios from "axios";



const Card = () => {

    const [users, setUsers] = useState([]);

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.table(res);    
  setUsers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <>
      {users.map((card) => (
          <div className="col-lg-3">
              <div ky={card.id} className="card" >
                  <div className="card-body">
                      <h1 className="card-name">{card.name[0]}</h1>
                      <h5 className="card-title">{card.name}</h5>
                      <h5 className="card-title">@{card.username}</h5>
                      <h5 className="card-title">https://{card.website}</h5>
                      <Link to={`/cards/${card.id}`}><button className="btn btn-primary">More Detaile</button></Link>
                  </div>
              </div>

              
          </div>
      ))}
      ;
    </>
  );
};

export default Card;
