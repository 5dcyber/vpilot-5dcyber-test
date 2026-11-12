import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SolutionsRouteNavigator from "./components/SolutionsRouteNavigator.jsx";
import RouteSectionNavigator from "./components/RouteSectionNavigator.jsx";
import ResourcesRouteNavigator from "./components/ResourcesRouteNavigator.jsx";
import FrameworksRouteNavigator from "./components/FrameworksRouteNavigator.jsx";

import HomePage from "./pages/HomePage.jsx";
import PlatformPage from "./pages/PlatformPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import FrameworksPage from "./pages/FrameworksPage.jsx";
import InsightsPage from "./pages/InsightsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import SubscribePage from "./pages/SubscribePage.jsx";
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
      <main id="main-content">
        <SolutionsRouteNavigator />
        <RouteSectionNavigator />
        <FrameworksRouteNavigator />
        <ResourcesRouteNavigator />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Legacy Company URLs resolve to the single corporate homepage. */}
          <Route path="/company" element={<Navigate to="/" replace />} />
          <Route path="/company/*" element={<Navigate to="/" replace />} />

                  {/* Company narratives remain part of the canonical homepage. */}
                  <Route
                      path="/about-v-pilot"
                      element={<HomePage initialSection="company-overview" />}
                  />

                  <Route
                      path="/why-v-pilot"
                      element={<HomePage initialSection="why-v-pilot" />}
                  />

                  <Route
                      path="/security-assurance"
                      element={<HomePage initialSection="security-assurance" />}
                  />

                  <Route
                      path="/5pilot-operations"
                      element={<HomePage initialSection="five-pilot-operations" />}
                  />

                  <Route
                      path="/5pilot-ops"
                      element={<Navigate to="/5pilot-operations" replace />}
                  />

          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/*" element={<PlatformPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/*" element={<SolutionsPage />} />
          <Route path="/frameworks" element={<FrameworksPage />} />
          <Route path="/frameworks/*" element={<FrameworksPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/security-disclosure" element={<SecurityDisclosurePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/*" element={<ResourcesPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
