export const megaMenus = {
  company: {
    eyebrow: "COMPANY",
    title: "One accountable cybersecurity operating model.",
    description: "See how V Pilot connects governance, specialist operations, validation and evidence through managed shared responsibility.",
    columns: [
      { title: "About V Pilot", links: [
        ["Company overview", "/company#overview"], ["Why V Pilot exists", "/company#why"],
        ["Operating model", "/company#model"], ["Leadership & governance", "/company#governance"]
      ]},
      { title: "Work with us", links: [
        ["Engagement options", "/company#engagement"], ["Service assurance", "/company#assurance"],
        ["Partners & ecosystem", "/company#ecosystem"], ["Careers", "/contact#careers"]
      ]}
    ],
    cta: ["Explore V Pilot", "/company"]
  },
  services: {
    eyebrow: "5PILOT SERVICES",
    title: "Five specialist Pilots. One integrated outcome.",
    description: "Engage one Pilot, assemble an Integrated Fleet or transfer coordinated operations through Complete 5Pilot Operations.",
    columns: [
      { title: "Specialist Pilots", links: [
        ["Compass Pilot", "/services#compass"], ["ART Pilot", "/services#art"],
        ["Vigil Pilot", "/services#vigil"], ["Custodian Pilot", "/services#custodian"],
        ["Phoenix Pilot", "/services#phoenix"]
      ]},
      { title: "Engagement model", links: [
        ["Single Pilot", "/services#engagement"], ["Integrated Fleet", "/services#engagement"],
        ["Complete 5Pilot Operations", "/services#complete"], ["Service catalogue", "/services"]
      ]}
    ],
    cta: ["Explore all services", "/services"]
  },
  solutions: {
    eyebrow: "PUDICA SOLUTIONS",
    title: "Solve operating problems, not isolated tool problems.",
    description: "PUDICA coordinates context, workflow, Pilot execution, GoldenVault validation, evidence and management reporting.",
    columns: [
      { title: "Secure & administer", links: [
        ["Endpoint security administration", "/solutions#endpoint"], ["Identity & access security", "/solutions#identity"],
        ["Cloud security operations", "/solutions#cloud"], ["Application & DevSecOps security", "/solutions#devsecops"]
      ]},
      { title: "Detect, remediate & recover", links: [
        ["Vulnerability remediation", "/solutions#remediation"], ["Managed detection & response", "/solutions#mdr"],
        ["Cyber recovery & resilience", "/solutions#recovery"], ["Managed ISMS & CISO as a Service", "/solutions#isms"]
      ]}
    ],
    cta: ["View integrated solutions", "/solutions"]
  },
  insights: {
    eyebrow: "INSIGHTS",
    title: "Frameworks, operating scenarios and practical guidance.",
    description: "Explore the methods and evidence behind integrated cybersecurity operations.",
    columns: [
      { title: "Frameworks", links: [
        ["5D Threat Intelligence", "/insights#frameworks"], ["ProdSecOps", "/insights#frameworks"],
        ["PUDICA architecture", "/insights#frameworks"], ["GoldenVault validation", "/insights#frameworks"]
      ]},
      { title: "Knowledge library", links: [
        ["Use cases", "/insights#use-cases"], ["Illustrative scenarios", "/insights#scenarios"],
        ["Blogs & perspectives", "/insights#blogs"], ["Resources", "/insights#resources"]
      ]}
    ],
    cta: ["Explore insights", "/insights"]
  }
};

export const pilots = [
  { id:"compass", name:"Compass Pilot", label:"CISO as a Service, GRC & Managed ISMS", summary:"Establishes direction, authority, risk governance and assurance across the complete security operating model.", items:["CISO and security advisory","Security strategy and operating model","Managed ISMS operations","Risk-register governance","Policy and standards management","Compliance-readiness coordination","Audit preparation and remediation tracking","Executive and board reporting"] },
  { id:"art", name:"ART Pilot", label:"Exposure, Testing & Remediation Operations", summary:"Converts exposure findings into tested, governed and evidence-backed remediation outcomes.", items:["Vulnerability assessment and operations","Penetration and application-security testing","Web, API, mobile, cloud and infrastructure assessments","Configuration-hardening validation","Remediation engineering","Patch, compatibility and rollback validation","Closure evidence and retesting","Unified vulnerability remediation"] },
  { id:"vigil", name:"Vigil Pilot", label:"Managed SIEM & Security Monitoring", summary:"Maintains visibility, detection quality and governed escalation using customer-relevant telemetry and threat context.", items:["Managed SIEM and SOC coordination","Telemetry onboarding","Detection engineering","Threat hunting","Alert triage and incident escalation","Log-source health monitoring","Threat-intelligence enrichment","Detection-coverage assurance"] },
  { id:"custodian", name:"Custodian Pilot", label:"Identity, Endpoint, Server & Control Administration", summary:"Operates the identity, device, server, cloud and configuration controls that sustain a trusted operating state.", items:["Microsoft Entra ID and Active Directory","Privileged-access governance","Microsoft Intune administration","Endpoint-security and EDR administration","Server-security administration","Configuration-baseline management","Account lifecycle and access reviews","Cloud-security administration"] },
  { id:"phoenix", name:"Phoenix Pilot", label:"Incident Response, Forensics, Backup & Resilience", summary:"Coordinates readiness, containment, investigation and trusted restoration when disruptive conditions occur.", items:["Incident-readiness planning","Incident-response coordination","Digital forensics and evidence preservation","Malware and compromise investigation","Containment and eradication support","Backup-governance assurance","Restoration and disaster-recovery testing","Post-incident improvement"] }
];

export const solutions = [
  {id:"endpoint", title:"Endpoint Security Administration", pilots:"Custodian + ART + Vigil", text:"Operate endpoint policies, EDR controls, device compliance, configuration drift, patch coordination and endpoint evidence as one managed outcome.", items:["Intune and endpoint-policy administration","Endpoint protection and EDR configuration","Device-compliance monitoring","Configuration-drift management","Vulnerability-to-device correlation","Patch and remediation coordination"]},
  {id:"remediation", title:"Vulnerability Remediation Operations", pilots:"ART + Custodian + Compass", text:"Move from finding generation to prioritized, tested, authorized and verified closure with production context and rollback readiness.", items:["Vulnerability ingestion and prioritization","Production-context assessment","Remediation engineering","Compatibility and rollback validation","Controlled deployment","Closure evidence"]},
  {id:"identity", title:"Identity & Access Security", pilots:"Custodian + Vigil + Compass", text:"Coordinate identity administration, privileged access, conditional access, monitoring and governance through one accountable service model.", items:["Entra ID and Active Directory","Identity-risk monitoring","Access governance","Privileged-access control","Joiner, mover and leaver processes","Access reviews"]},
  {id:"mdr", title:"Managed Detection & Response", pilots:"Vigil + Phoenix + ART", text:"Combine telemetry, detection engineering, threat hunting, escalation and response coordination around customer-relevant risk.", items:["Telemetry integration","SIEM administration","Detection engineering","Alert triage","Threat hunting","Containment coordination"]},
  {id:"cloud", title:"Cloud Security Operations", pilots:"All five Pilots", text:"Operate cloud posture, identity, configuration, vulnerability, monitoring, incident and recovery responsibilities through shared governance.", items:["Cloud posture administration","Privileged-access governance","Security configuration","Logging and detection","Incident response","Backup and recovery validation"]},
  {id:"devsecops", title:"Application & DevSecOps Security", pilots:"ART + Vigil + Compass", text:"Integrate application testing, secure-delivery controls, remediation and production assurance without separating development security from operations.", items:["Web, API and mobile testing","Secure-development controls","CI/CD security gates","Dependency and container scanning","Release-risk validation","Production monitoring"]},
  {id:"recovery", title:"Backup, Recovery & Cyber Resilience", pilots:"Phoenix + Custodian + Compass", text:"Validate backup governance, restoration sequence, cyber-recovery readiness and management evidence before an emergency.", items:["Backup-policy assurance","RPO and RTO validation","Restoration testing","Cyber-recovery readiness","DR and BCP exercises","Executive resilience reporting"]},
  {id:"isms", title:"Managed ISMS & CISO as a Service", pilots:"Compass + all operational Pilots", text:"Connect governance, risk, policy, control ownership, operational evidence and continual improvement to work performed by the Pilot Fleet.", items:["Security governance","Risk management","Policy administration","Control-owner coordination","Audit preparation","Operational reporting"]}
];
