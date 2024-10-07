import { Link } from 'react-router-dom';
import vertStackLogo from '/vertstack.svg';

function Home() {
  return (
    <main className="home-container">
      <div className="title-container">
        <img
          src={vertStackLogo}
          alt="VERT Stack Logo"
          className="inline-logo"
        />
        <h1>Welcome to the VERT Stack Template</h1>
      </div>
      <p>
        This template provides a solid foundation for building modern web
        applications using:
      </p>
      <ul>
        <li>
          <strong>V</strong>ite for fast development and efficient building
        </li>
        <li>
          <strong>E</strong>SLint for consistent code quality
        </li>
        <li>
          <strong>R</strong>eact for building user interfaces
        </li>
        <li>
          <strong>T</strong>ypeScript for type safety
        </li>
      </ul>
      <p>
        Explore the different pages to see examples of routing, component
        structure, and API integration.
      </p>
      <div className="cta-container">
        <Link to="/api-example" className="button-link">
          View API Example
        </Link>
      </div>
    </main>
  );
}

export default Home;
