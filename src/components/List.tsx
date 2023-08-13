import { Person } from "./data";

interface ListProps {
  people: Person[];
  onDelete: (id: number) => void;
}

export default function List({ people, onDelete }: ListProps) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                onClick={() => onDelete(person.id)}
                style={{ width: "100px" }}
              >
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
