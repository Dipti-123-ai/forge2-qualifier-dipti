import { useEffect, useState } from "react";

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/boards")
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
  <div style={{ padding: "20px" }}>
    <h1>Kanban Board</h1>

    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
        <h3>To Do</h3>
        {boards.map((board) => (
          <div key={board.id}>{board.name}</div>
        ))}
      </div>

      <div style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
        <h3>In Progress</h3>
      </div>

      <div style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
        <h3>Done</h3>
      </div>
    </div>
  </div>
);
}

export default App;