import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, ShieldCheck, Users } from "lucide-react";
import "./vpilot-subscribe-enterprise.css";

const preferences = [
  "Insights and Research",
  "Security Advisories",
  "Framework Updates",
  "Events and Webinars",
  "Product Updates",
];

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const togglePreference = (value) => {
    setSelected((current) => current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value]);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="vsub-page">
      <section className="vsub-hero">
        <div className="vsub-shell vsub-hero__grid">
          <div className="vsub-copy">
            <span className="vsub-eyebrow">STAY INFORMED</span>
            <h1>Operational Knowledge <em>for a Safer Tomorrow.</em></h1>
            <p>
              Subscribe to receive V Pilot insights, security advisories,
              framework updates, technical guidance and event invitations.
              Practical knowledge for stronger security operations.
            </p>

            <form className="vsub-form" onSubmit={submit} noValidate>
              <label htmlFor="business-email">Enter your business email</label>
              <div className="vsub-input-row">
                <input
                  id="business-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                />
                <button type="submit">Subscribe <ArrowRight size={17}/></button>
              </div>

              <fieldset>
                <legend>I would like to receive:</legend>
                <div className="vsub-preferences">
                  {preferences.map((preference) => (
                    <label key={preference}>
                      <input
                        type="checkbox"
                        checked={selected.includes(preference)}
                        onChange={() => togglePreference(preference)}
                      />
                      <span>{preference}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <p className="vsub-consent">
                By subscribing, you agree to receive the selected V Pilot communications.
                You may unsubscribe at any time. See the <Link to="/privacy">Privacy Policy</Link>
                for information about data handling.
              </p>

              {submitted && (
                <div className="vsub-success" role="status">
                  <Check size={18}/> Subscription preferences recorded for {email}.
                </div>
              )}
            </form>
          </div>

          <aside className="vsub-benefits" aria-label="Subscription benefits">
            <article><Mail/><div><h2>Relevant and timely updates</h2><p>Curated for security, risk and IT leaders.</p></div></article>
            <article><ShieldCheck/><div><h2>No unnecessary noise</h2><p>Focused, high-quality communications.</p></div></article>
            <article><Users/><div><h2>Support for your entire team</h2><p>Executive, operational and technical topics.</p></div></article>
          </aside>
        </div>
      </section>

      <section className="vsub-footer-band">
        <div className="vsub-shell">
          <strong>Knowledge Today. A Safer Tomorrow.</strong>
          <span>We pilot your security operations.</span>
        </div>
      </section>
    </div>
  );
}
