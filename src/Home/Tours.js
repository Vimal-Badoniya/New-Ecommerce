import React from "react";
import "./Tours.css";
import Button from "../UI/Button";

const tours = [
    { date: "5th May", city: "New Delhi", venue: "Canaught Place", id: "T01" },
    { date: "7th May", city: "Indore", venue: "Holker Stadium", id: "T02" },
    { date: "10th May", city: "Jodhpur", venue: "Ummaid Bhavan", id: "T03" },
    { date: "15th May", city: "Surat", venue: "Sindhi House", id: "T04" },
  ];

const Tours = ()=>{
    return (
        <section className="containersection">
        <h2 className="h2">TOURS</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>City</th>
              <th>Venue</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.city}</td>
                  <td>{item.venue}</td>
                  <td>
                    <Button name="Buy Tickets"></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    )
};

export default Tours;