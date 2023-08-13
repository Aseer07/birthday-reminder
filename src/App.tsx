import { useState } from "react";
import List from "./components/List";
//import data from "./components/data";
import data, { Person } from "./components/data";

const App = () => {
  const [people, setPeople] = useState<Person[]>(data);

  const handleDelete = (id: number) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} onDelete={handleDelete} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
