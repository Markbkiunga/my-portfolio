import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="text-center">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound-button">
          Go Home
        </Link>
      </div>
    </div>
  );
}
