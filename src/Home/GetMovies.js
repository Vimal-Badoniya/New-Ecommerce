import React, { useState } from "react";
import Button from "../UI/Button";

function GetMovies(props) {
    const [isdeleting , setIsDeleting] = useState(false)
  const deleteHandler = async (id) => {
    setIsDeleting(true);
    //console.log("deleted");
    //console.log(id);
    await fetch(`https://crudcrud.com/api/c28067d0d4254f72a6cfd019cbf5473a/movies/${id}` , {
        method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      console.log('Data deleted successfully');
      props.getdata();
      setIsDeleting(false);
    })
    .catch((error) => {
      console.error('Error deleting data:', error.message);
      
    })
    }
  
  return (
    <section className="containersection">
      <h2 className="h2">MOVIES</h2>
      {isdeleting && <h3>Deleting Data Please Wait .....</h3>}
     {!isdeleting && <table className="table">
        <thead>
          <tr>
            <td>Movie</td>
            <td>Director</td>
            <td>Producer</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.director}</td>
                <td>{item.producer}</td>
                <td>
                  <Button
                    click={() => {
                      deleteHandler(item._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>}
    </section>
  );
}

export default GetMovies;
