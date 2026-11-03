import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>

        <Link className="btn primary" to="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
