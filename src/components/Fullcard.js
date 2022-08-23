import React from "react";
import { useParams } from "react-router-dom";

const Fullcard = ({ users }) => {
    console.log(users);
  const { userid } = useParams();
  return (
    <section className="full">
      <div className="container">
        {users.find((card) => card.id === Number(userid)).map((card) => {
            return (
                
              <div key={card.id} className="card">
                <ul>
                    
                    <li>name:{card.name}</li>
                    <li>username:{card.username}</li>
                    <li>email:{card.email}</li>
                    <li>company:{card.company.name}</li>
                    <li>website:{card.username}</li>
                    <li>address:
                        <li>street:{card.street}</li>
                        <li>suite:{card.suite}</li>
                        <li>city:{card.city}</li>
                        <li>zipcode:{card.zipcode}</li>
                    </li>
                </ul>
                
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Fullcard;
