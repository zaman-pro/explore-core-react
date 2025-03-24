export default function Phone({ phone }) {
  const { brand, price, color, battery } = phone;
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        marginTop: "20px",
        color: "gold",
      }}
    >
      <h3>Name: {brand}</h3>
      <p>Price: {price}</p>
      <p>Color: {color}</p>
      <p>Battery: {battery}</p>
    </div>
  );
}
