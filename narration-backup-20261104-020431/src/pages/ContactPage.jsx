export default function ContactPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <span className="eyebrow">CONTACT US</span>
        <h1>Let us pilot your security operations.</h1>

        <div className="contact-details">
          <h2>V Pilot Cyber Solutions LLP</h2>

          <address>
            Suite No 12, Pulsebay 64<br />
            Opp. to Railway Station<br />
            Subbiah Salai<br />
            Pondicherry 605001, India
          </address>

          <p>
            Email:{" "}
            <a href="mailto:enquiry@vpilot.org">
              enquiry@vpilot.org
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+919442331700">
              +91 94423 31700
            </a>
          </p>

          <div className="career-card">
            <span className="eyebrow">JOIN OUR FLEET</span>
            <h2>DevSecOps Engineer</h2>

            <p>
              Help integrate secure engineering, application
              security, cloud controls, deployment assurance
              and production-security operations.
            </p>

            <a
              className="btn primary"
              href="mailto:enquiry@vpilot.org?subject=Application%20%E2%80%93%20DevSecOps%20Engineer"
            >
              Apply for this opportunity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
