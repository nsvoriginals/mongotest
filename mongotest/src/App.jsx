import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [college, setCollege] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users,setUsers]=useState([{}])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getusers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/submit', {
        name,
        email,
        age,
        college,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert('User submitted successfully!');
      console.log(result);
    } catch (error) {
      console.error('Error occurred:', error);
      setErrorMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <br />
        <input
          type="text"
          placeholder='College'
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Submit</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>

      <div>
        <h2>Users List</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email} - {user.age} - {user.college}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
}

export default App;
