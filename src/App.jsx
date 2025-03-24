import "./App.css";
import Todo from "./Todo";
import Phone from "./Phone";

function App() {
  const phones = [
    {
      id: 101,
      brand: "Nokia",
      price: 15000,
      color: "Black",
      battery: "4000mAh",
    },
    {
      id: 102,
      brand: "Samsung",
      price: 35000,
      color: "Blue",
      battery: "5000mAh",
    },
    {
      id: 103,
      brand: "Apple",
      price: 120000,
      color: "White",
      battery: "3200mAh",
    },
    {
      id: 104,
      brand: "Xiaomi",
      price: 25000,
      color: "Red",
      battery: "4500mAh",
    },
    {
      id: 105,
      brand: "OnePlus",
      price: 55000,
      color: "Green",
      battery: "4800mAh",
    },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {phones.map((phone) => (
        // console.log(phone);
        <Phone key={phone.id} phone={phone}></Phone>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Revise JS" isDone={false}></Todo>
      <Todo task="Take a shower" isDone={true}></Todo> */}

      {/* <Player name="Tamim" runs="10000"></Player>
      <Player name="Mushi" runs="5000"></Player>
      <Person name="Sifat" techno="JS"></Person>
      <Person name="Sayed" techno="Python"></Person>
      <Person name="Rafi" techno="Java"></Person>
      <Person name="Sadi" techno="C+"></Person> */}
    </>
  );
}

function Player({ name, runs }) {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <h3>Name: {name}</h3>
      <p>Run: {runs}</p>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid salmon",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <h4>I'm a developer.</h4>
      <h2>My name is {props["name"]}</h2>
      <h4>Technology: {props["techno"]}</h4>
    </div>
  );
}

export default App;
