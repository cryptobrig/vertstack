import { useState, useEffect } from 'react';
import { fetchData, sanitizeInput } from '../utils/api';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading user data...</div>;
  if (error)
    return (
      <div className="error">
        Error fetching user data: {sanitizeInput(error)}
      </div>
    );

  return (
    <div className="user-list-container">
      <h2>API Integration Example: User List</h2>
      <p>
        This component demonstrates how to fetch and display data from an
        external API using the VERT stack. We&apos;re using the JSONPlaceholder
        API to retrieve a list of users.
      </p>
      <p>Key points:</p>
      <ul>
        <li>
          Data is fetched using the <code>fetchData</code> utility from{' '}
          <code>src/utils/api.ts</code>
        </li>
        <li>
          React hooks (<code>useState</code> and <code>useEffect</code>) manage
          the component&apos;s state and side effects
        </li>
        <li>Loading and error states are handled to improve user experience</li>
      </ul>
      <div className="api-info">
        <h3>API Details:</h3>
        <p>Endpoint: https://jsonplaceholder.typicode.com/users</p>
        <p>This free API provides mock data for testing and prototyping.</p>
      </div>
      <h3>User Data:</h3>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{sanitizeInput(user.name)}</td>
                <td>{sanitizeInput(user.email)}</td>
                <td>{sanitizeInput(user.company.name)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
