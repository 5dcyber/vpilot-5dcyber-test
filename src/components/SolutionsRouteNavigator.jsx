import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const targets={
  "/solutions":"solutions-top",
  "/solutions/secure-business-transformation":"solutions-portfolio",
  "/solutions/cloud-digital-migration":"solutions-portfolio",
  "/solutions/identity-endpoint-modernization":"solutions-nativetrust",
  "/solutions/nativetrust-workspace":"solutions-nativetrust",
  "/solutions/autonomous-remediation":"solutions-remediation",
  "/solutions/integrated-security-operations":"solutions-integrated",
  "/solutions/autonomous-resilience":"solutions-integrated",
  "/solutions/application-security-governance":"solutions-integrated",
  "/solutions/grc-compliance":"solutions-integrated",
  "/solutions/enterprise-risk-management":"solutions-business-outcomes",
  "/solutions/threat-informed-risk-management":"solutions-business-outcomes",
  "/solutions/iso-27001-operational-readiness":"solutions-business-outcomes",
  "/solutions/privacy-data-protection":"solutions-business-outcomes",
  "/solutions/autonomous-incident-response":"solutions-integrated",
  "/solutions/cloud-forensics":"solutions-integrated",
  "/solutions/cyber-resilience-recovery":"solutions-integrated",
  "/solutions/ransomware-recovery":"solutions-integrated",
  "/solutions/industry":"solutions-industries",
  "/solutions/engagement-paths":"solutions-approach"
};
export default function SolutionsRouteNavigator(){const{pathname}=useLocation();useEffect(()=>{const id=targets[pathname];if(!id)return;const timer=window.setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}),100);return()=>window.clearTimeout(timer)},[pathname]);return null}
