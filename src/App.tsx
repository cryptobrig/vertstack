import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Hello, VERT Stack!</h1>
      </div>
    </ErrorBoundary>
  );
}

export default App;
