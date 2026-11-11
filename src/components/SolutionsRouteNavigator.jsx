import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionByPath = {
  "/solutions": "solutions-top",
  "/solutions/secure-business-transformation": "solutions-portfolio",
  "/solutions/cloud-digital-migration": "solutions-portfolio",
  "/solutions/identity-endpoint-modernization": "solutions-nativetrust",
  "/solutions/nativetrust-workspace": "solutions-nativetrust",
  "/solutions/autonomous-remediation": "solutions-remediation",
  "/solutions/integrated-security-operations": "solutions-integrated-operations",
  "/solutions/autonomous-resilience": "solutions-integrated-operations",
  "/solutions/application-security-governance": "solutions-integrated-operations",
  "/solutions/grc-compliance": "solutions-integrated-operations",
  "/solutions/enterprise-risk-management": "solutions-integrated-operations",
  "/solutions/threat-informed-risk-management": "solutions-integrated-operations",
  "/solutions/iso-27001-operational-readiness": "solutions-integrated-operations",
  "/solutions/privacy-data-protection": "solutions-integrated-operations",
  "/solutions/autonomous-incident-response": "solutions-integrated-operations",
  "/solutions/cloud-forensics": "solutions-integrated-operations",
  "/solutions/cyber-resilience-recovery": "solutions-integrated-operations",
  "/solutions/ransomware-recovery": "solutions-integrated-operations",
  "/solutions/industry": "solutions-industries",
  "/solutions/engagement-paths": "solutions-approach",
};

export default function SolutionsRouteNavigator() {
  const { pathname } = useLocation();
  useEffect(() => {
    const id = sectionByPath[pathname];
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);
  return null;
}
