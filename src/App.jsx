import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import InsightsPage from "./pages/InsightsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {
  PrivacyPolicyPage,
  TermsOfUsePage,
  CookiePolicyPage,
  SecurityDisclosurePage,
  AccessibilityPage,
} from "./pages/LegalTrustPages.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/security-disclosure" element={<SecurityDisclosurePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
