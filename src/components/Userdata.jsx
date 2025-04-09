import { useEffect, useState } from "react";

export default function Userdata() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ marginTop: "10px" }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> <br />
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
