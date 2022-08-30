import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  //State for the forms, value to be used in the form
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  //State that notes when we are editing or not
  const [isEditing, setIsEditing] = useState(false);
  //This reflects which item we are actually editing
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" placeholder="e.g. Eggs" className="grocery" value={name} onChange={(e)=> {setName(e.target.value)}}/>
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">Clear Items</button>
      </div>
    </section>
  );
}

export default App;
