import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const targets={
  "/frameworks":"frameworks-top",
  "/frameworks/prodsecops":"frameworks-prodsecops",
  "/frameworks/prodsecapps":"frameworks-prodsecapps",
  "/frameworks/5d-threat-intelligence":"frameworks-5d-threat-intelligence",
  "/frameworks/seclabs":"frameworks-seclabs",
  "/frameworks/goldenvault":"frameworks-goldenvault",
  "/frameworks/validation-lifecycle":"frameworks-seclabs",
  "/frameworks/shared-responsibility":"frameworks-shared-responsibility",
  "/frameworks/authority-model":"frameworks-shared-responsibility",
  "/frameworks/evidence-by-design":"frameworks-evidence-by-design",
  "/frameworks/continual-improvement":"frameworks-adoption",
  "/frameworks/adoption":"frameworks-adoption",
  "/frameworks/resources":"frameworks-resources"
};
export default function FrameworksRouteNavigator(){const{pathname}=useLocation();useEffect(()=>{const id=targets[pathname];if(!id)return;const timer=window.setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}),100);return()=>window.clearTimeout(timer)},[pathname]);return null}
