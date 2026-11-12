import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
const backupRoot = path.join(root, `.vpilot-optimization-backup-${stamp}`);
const googleToken = "9yMFfoUwFsOMTxiQblnKNg_MA5Y6l1KnhUFRKFnkW5E";
const facebookToken = process.env.FACEBOOK_DOMAIN_VERIFICATION?.trim() || "";

const files = {
  app: path.join(root, "src", "App.jsx"),
  home: path.join(root, "src", "pages", "HomePage.jsx"),
  index: path.join(root, "index.html"),
  css: path.join(root, "src", "pages", "vpilot-home-recommended.css"),
  robots: path.join(root, "public", "robots.txt"),
  sitemap: path.join(root, "public", "sitemap.xml"),
  gitignore: path.join(root, ".gitignore"),
};

function fail(message) {
  throw new Error(message);
}
function read(file) {
  if (!fs.existsSync(file)) fail(`Required file not found: ${file}`);
  return fs.readFileSync(file, "utf8");
}
function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, "\n"), "utf8");
}
function backup(file) {
  if (!fs.existsSync(file)) return;
  const relative = path.relative(root, file);
  const target = path.join(backupRoot, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(file, target);
}
function replaceRequired(source, oldValue, newValue, label) {
  if (!source.includes(oldValue)) fail(`Could not find required ${label}. No partial update was applied.`);
  return source.replace(oldValue, newValue);
}
function restore() {
  if (!fs.existsSync(backupRoot)) return;
  for (const entry of fs.readdirSync(backupRoot, { recursive: true })) {
    const from = path.join(backupRoot, entry);
    if (!fs.statSync(from).isFile()) continue;
    const to = path.join(root, entry);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }
}

for (const file of Object.values(files)) backup(file);

try {
  let app = read(files.app);
  app = replaceRequired(
    app,
    '<Route path="/about-v-pilot" element={<HomePage initialSection="about-v-pilot" />} />',
    '<Route path="/about-v-pilot" element={<HomePage initialSection="company-overview" />} />',
    "About V Pilot route"
  );
  app = replaceRequired(
    app,
    '<Route path="/5pilot-operations" element={<HomePage initialSection="5pilot-operations" />} />',
    '<Route path="/5pilot-operations" element={<HomePage initialSection="five-pilot-operations" />} />',
    "5Pilot Operations route"
  );
  write(files.app, app);

  let home = read(files.home);
  home = home.replace('import { Link } from "react-router-dom";', 'import { useEffect } from "react";\nimport { Link, useLocation } from "react-router-dom";');
  home = home.replaceAll("Â·", "·").replaceAll("â€™", "’").replaceAll("â€“", "–").replaceAll("â€”", "—");
  home = replaceRequired(
    home,
    'export default function HomePage(){return <div className="vph2-page">',
    `export default function HomePage({ initialSection = null }){\n  const location = useLocation();\n\n  useEffect(() => {\n    const query = new URLSearchParams(location.search);\n    const requestedSection = initialSection || query.get("section");\n\n    if (!requestedSection) {\n      window.scrollTo({ top: 0, behavior: "auto" });\n      return;\n    }\n\n    const timer = window.setTimeout(() => {\n      const section = document.getElementById(requestedSection);\n      if (!section) return;\n      section.scrollIntoView({ behavior: "smooth", block: "start" });\n      section.focus({ preventScroll: true });\n    }, 120);\n\n    return () => window.clearTimeout(timer);\n  }, [initialSection, location.pathname, location.search]);\n\n  return <div className="vph2-page">`,
    "HomePage function declaration"
  );
  home = replaceRequired(
    home,
    '<h1 className="vph2-hero-title">\n We Pilot <em>Your Security Operations.</em>\n</h1>\n<strong className="vph2-hero-brand">\n From Risk to Resilient Outcomes.\n</strong>',
    '<h1 className="vph2-hero-title">\n  From Risk to <em>Resilient Outcomes.</em>\n</h1>\n<strong className="vph2-hero-brand">\n  We Pilot Your Security Operations.\n</strong>',
    "hero hierarchy"
  );
  home = home.replace(
    "V Pilot works as an extension of security, IT, risk, compliance, and resilience teams",
    "V Pilot Cyber Solutions LLP works as an extension of customer security, IT, risk, compliance, and resilience teams"
  );
  home = replaceRequired(
    home,
    '<PremiumHomeNarrative />',
    '<div id="company-overview" className="vph2-route-anchor" tabIndex={-1}>\n        <PremiumHomeNarrative />\n      </div>',
    "PremiumHomeNarrative element"
  );
  home = replaceRequired(
    home,
    '<section className="vph2-section vph2-gap">',
    '<section id="why-v-pilot" className="vph2-section vph2-gap" tabIndex={-1}>',
    "Why V Pilot section"
  );
  home = replaceRequired(
    home,
    '<section className="vph2-section vph2-platform">',
    '<section id="pudica-platform" className="vph2-section vph2-platform" tabIndex={-1}>',
    "PUDICA section"
  );
  home = replaceRequired(
    home,
    '<section className="vph2-section vph2-pilots">',
    '<section id="five-pilot-operations" className="vph2-section vph2-pilots" tabIndex={-1}>',
    "5Pilot section"
  );
  home = replaceRequired(
    home,
    '<section className="vph2-section vph2-assurance">',
    '<section id="security-assurance" className="vph2-section vph2-assurance" tabIndex={-1}>',
    "Security Assurance section"
  );
  home = home.replace('to="/company/5pilot-operations"', 'to="/5pilot-operations"');
  home = home.replaceAll('<Link to="/contact">Schedule Executive Briefing', '<Link to="/contact?intent=executive-briefing">Schedule Executive Briefing');
  home = home.replace('<Link to="/contact">Request Operating-Gap Assessment</Link>', '<Link to="/contact?intent=operating-gap-assessment">Request Operating-Gap Assessment</Link>');
  write(files.home, home);

  let css = fs.existsSync(files.css) ? read(files.css) : "";
  const cssMarker = "V PILOT ROUTE SECTION ACCESSIBILITY START";
  if (!css.includes(cssMarker)) {
    css += `\n\n/* ${cssMarker} */\n.vph2-route-anchor,\n.vph2-section[id] {\n  scroll-margin-top: 7rem;\n  outline: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    scroll-behavior: auto !important;\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/* V PILOT ROUTE SECTION ACCESSIBILITY END */\n`;
  }
  write(files.css, css);

  const socialImage = fs.existsSync(path.join(root, "public", "assets", "vpilot-social-preview-1200x630.jpg"))
    ? "https://5dcyber.site/assets/vpilot-social-preview-1200x630.jpg"
    : "https://5dcyber.site/assets/pudica-blueprint.png";
  const facebookMeta = facebookToken
    ? `\n    <meta name="facebook-domain-verification" content="${facebookToken}" />`
    : "";

  const index = `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />\n    <meta name="theme-color" content="#06111f" />\n    <title>V Pilot Cyber Solutions | Integrated Security Operations</title>\n    <meta name="description" content="V Pilot Cyber Solutions delivers accountable managed cybersecurity operations through specialist teams, PUDICA, production-relevant validation, trusted recovery and continuous evidence." />\n    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />\n    <meta name="google-site-verification" content="${googleToken}" />${facebookMeta}\n    <link rel="canonical" href="https://5dcyber.site/" />\n\n    <meta property="og:type" content="website" />\n    <meta property="og:site_name" content="V Pilot Cyber Solutions" />\n    <meta property="og:title" content="V Pilot Cyber Solutions | Integrated Security Operations" />\n    <meta property="og:description" content="Accountable managed cybersecurity operations powered by PUDICA, specialist Pilot teams, production-relevant validation, trusted recovery and continuous assurance." />\n    <meta property="og:url" content="https://5dcyber.site/" />\n    <meta property="og:image" content="${socialImage}" />\n    <meta property="og:image:secure_url" content="${socialImage}" />\n    <meta property="og:image:alt" content="V Pilot Cyber Solutions integrated managed cybersecurity operations" />\n\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="V Pilot Cyber Solutions | Integrated Security Operations" />\n    <meta name="twitter:description" content="Accountable managed cybersecurity operations powered by PUDICA and five specialist Pilot teams." />\n    <meta name="twitter:image" content="${socialImage}" />\n\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />\n    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />\n    <link rel="icon" href="/favicon.ico" sizes="any" />\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />\n    <link rel="manifest" href="/site.webmanifest" />\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />\n\n    <script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "@id": "https://5dcyber.site/#organization",\n        "name": "V Pilot Cyber Solutions LLP",\n        "url": "https://5dcyber.site/",\n        "description": "V Pilot Cyber Solutions LLP delivers accountable managed cybersecurity operations through specialist teams, integrated technology, production-relevant validation, trusted recovery and continuous evidence.",\n        "email": "enquiry@vpilot.org",\n        "sameAs": [\n          "https://www.linkedin.com/company/vpilotcyber",\n          "https://x.com/vpilotcyber",\n          "https://www.facebook.com/VPilotCyberSolutions",\n          "https://www.instagram.com/vpilotcyber"\n        ]\n      }\n    </script>\n    <script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "@id": "https://5dcyber.site/#website",\n        "url": "https://5dcyber.site/",\n        "name": "V Pilot Cyber Solutions",\n        "publisher": { "@id": "https://5dcyber.site/#organization" },\n        "inLanguage": "en"\n      }\n    </script>\n  </head>\n  <body>\n    <noscript>V Pilot Cyber Solutions requires JavaScript to display this website.</noscript>\n    <div id="root"></div>\n    <script type="module" src="/src/main.jsx"></script>\n  </body>\n</html>\n`;
  write(files.index, index);

  write(files.robots, `User-agent: *\nAllow: /\n\nSitemap: https://5dcyber.site/sitemap.xml\n`);
  write(files.sitemap, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://5dcyber.site/</loc>\n    <lastmod>2026-11-12</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`);

  let gitignore = fs.existsSync(files.gitignore) ? read(files.gitignore) : "";
  if (!gitignore.includes(".vpilot-optimization-backup-*/")) {
    gitignore += `${gitignore.endsWith("\n") || gitignore.length === 0 ? "" : "\n"}.vpilot-optimization-backup-*/\n`;
  }
  write(files.gitignore, gitignore);

  const damaged = ["Â·", "â€™", "â€“", "â€”", "V Pilt", "/company/5pilot-operations"];
  const active = [read(files.app), read(files.home), read(files.index)].join("\n");
  for (const token of damaged) {
    if (active.includes(token)) fail(`Validation failed: ${token} still exists in active source.`);
  }

  const build = spawnSync("npm.cmd", ["run", "build"], {
    cwd: root,
    stdio: "inherit",
    shell: true,
  });
  if (build.status !== 0) fail("npm build failed.");

  console.log("\nV Pilot homepage optimization completed successfully.");
  console.log(`Backup: ${backupRoot}`);
  console.log(`Facebook token installed: ${facebookToken ? "yes" : "no (set FACEBOOK_DOMAIN_VERIFICATION and rerun if required)"}`);
  console.log(`Social image: ${socialImage}`);
} catch (error) {
  console.error(`\nUpdate failed: ${error.message}`);
  console.error("Restoring backed-up files...");
  restore();
  process.exit(1);
}
