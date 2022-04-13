import { useState } from "react";
function App() {
  const [students, setStudents] = useState(["Mumtaz", "Zubair", "Abubakar"]);
  return (
    <div className="App">
      <button
        onClick={() => {
          let temp = [...students];
          temp.sort();
          setStudents(temp);
        }}
      >
        Sort
      </button>
      <ul>
        {students.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
