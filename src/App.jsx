import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('')
  const fetchUsers = async () => {
    try {   
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
    } catch (error) {
      setMessage(`Sorry, the API responded with ${error.response.statusText}`)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let usersList = users.map((user) => {
    return <li key={user.id}>{user.first_name}</li>;
  });

  return (
    <>
      <h1>Users</h1>
      <ul data-cy="users-list">{usersList}</ul>
      <div data-cy="message">{message}</div>
    </>
  );
};

export default App;
