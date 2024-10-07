import UserList from './UserList';

function ApiExample() {
  return (
    <div className="api-example-container">
      <h1>API Integration Example</h1>
      <p>
        This page demonstrates how to integrate an external API using the VERT
        stack. It showcases fetching data, handling loading and error states,
        and displaying the results.
      </p>
      <div aria-live="polite" aria-atomic="true">
        <UserList />
      </div>
    </div>
  );
}

export default ApiExample;
