import React from "react";

const ApiTable = () => {
  return (
    <div className="container">
      <h1>There are ... post in Database</h1>
      <div className="row">
        <div className="col">
          <input className="form-control" placeholder="Add post" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add Post</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tittle</td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;
