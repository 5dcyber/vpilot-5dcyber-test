import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const map={
 "/solutions":"solutions-top",
 "/solutions/secure-business-transformation":"solutions-portfolio",
 "/solutions/cloud-digital-migration":"solutions-portfolio",
 "/solutions/identity-endpoint-modernization":"solutions-nativetrust",
 "/solutions/nativetrust-workspace":"solutions-nativetrust",
 "/solutions/autonomous-remediation":"solutions-remediation",
 "/solutions/integrated-security-operations":"solutions-integrated-operations",
 "/solutions/autonomous-resilience":"solutions-integrated-operations",
 "/solutions/application-security-governance":"solutions-integrated-operations",
 "/solutions/grc-compliance":"solutions-integrated-operations",
 "/solutions/enterprise-risk-management":"solutions-integrated-operations",
 "/solutions/threat-informed-risk-management":"solutions-integrated-operations",
 "/solutions/iso-27001-operational-readiness":"solutions-integrated-operations",
 "/solutions/privacy-data-protection":"solutions-integrated-operations",
 "/solutions/autonomous-incident-response":"solutions-integrated-operations",
 "/solutions/cloud-forensics":"solutions-integrated-operations",
 "/solutions/cyber-resilience-recovery":"solutions-integrated-operations",
 "/solutions/ransomware-recovery":"solutions-integrated-operations"
};
export default function SolutionsRouteNavigator(){const{pathname}=useLocation();useEffect(()=>{const id=map[pathname];if(!id)return;const t=setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);return()=>clearTimeout(t)},[pathname]);return null}
