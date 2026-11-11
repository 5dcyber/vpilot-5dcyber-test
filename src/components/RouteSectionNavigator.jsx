import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTargets = {
  "/platform": "platform-top",
  "/platform/architecture": "platform-architecture",
  "/platform/command-center": "platform-command-center",
  "/platform/integrations": "platform-integrations",
  "/platform/microsoft-security-connector": "platform-integrations",
  "/platform/nativetrust-workspace": "platform-capabilities",
  "/platform/autonomous-remediation": "platform-capabilities",
  "/platform/integrated-security-operations": "platform-capabilities",
  "/platform/autonomous-resilience": "platform-capabilities",
  "/platform/application-security-governance": "platform-capabilities",
  "/platform/grc-compliance": "platform-capabilities",
  "/platform/asset-graph": "platform-shared-operations",
  "/platform/service-operations-hub": "platform-shared-operations",
  "/platform/risk-control-register": "platform-shared-operations",
  "/platform/approval-governance": "platform-shared-operations",
  "/platform/incident-response-center": "platform-shared-operations",
  "/platform/evidence-vault": "platform-shared-operations",
  "/services": "services-top",
  "/services/ciso-as-a-service": "services-domains",
  "/services/iso-27001-certification-readiness": "services-domains",
  "/services/enterprise-risk-assessment": "services-domains",
  "/services/privacy-readiness": "services-domains",
  "/services/vendor-security-assessment": "services-domains",
  "/services/managed-iam": "services-domains",
  "/services/managed-entra-intune": "services-domains",
  "/services/managed-nativetrust": "services-nativetrust",
  "/services/zero-trust-endpoint-operations": "services-domains",
  "/services/application-browser-governance": "services-domains",
  "/services/penetration-testing": "services-remediation",
  "/services/managed-vulnerability-remediation": "services-remediation",
  "/services/configuration-remediation": "services-remediation",
  "/services/software-patch-remediation": "services-remediation",
  "/services/arc-remediation": "services-remediation",
  "/services/managed-siem": "services-domains",
  "/services/detection-engineering": "services-domains",
  "/services/threat-intelligence-operations": "services-domains",
  "/services/incident-response": "services-domains",
  "/services/digital-cloud-forensics": "services-domains",
  "/services/managed-backup": "services-domains",
  "/services/restore-validation": "services-domains",
  "/services/bcp-dr": "services-domains",
  "/services/ransomware-recovery": "services-domains",
  "/services/recovery-assurance": "services-domains",
};

export default function RouteSectionNavigator() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targetId = routeTargets[pathname];
    if (!targetId) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
