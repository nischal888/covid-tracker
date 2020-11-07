import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [resourceType]);

  return (
    <div className="App">
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <br />
      <h1>{resourceType}</h1>
      {items.map((item) => (
        <pre key={item.id}> {JSON.stringify(item)}</pre>
      ))}
    </div>
  );
}

export default App;
