export default function ProfileCard({ name, age, location, avatar }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        margin: "10px",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}
