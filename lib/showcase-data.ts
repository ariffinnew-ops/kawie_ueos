import {
  LayoutDashboard,
  Users,
  Package,
  DollarSign,
  type LucideIcon,
} from 'lucide-react'

export const YOUTUBE_EMBED_ID = 'ISrwY8S53WQ'

export function screenshotPath(filename: string) {
  return `/screenshot/${encodeURIComponent(filename)}`
}

export type ModuleCard = {
  id: string
  tag: string
  name: string
  description: string
  color: string
  icon: LucideIcon
  screenshot: string
  features: string[]
}

export const MODULE_CARDS: ModuleCard[] = [
  {
    id: 'pms',
    tag: 'PMS',
    name: 'Project Management System',
    description: 'Command centre for every active contract.',
    color: '#00c6d7',
    icon: LayoutDashboard,
    screenshot: 'OVERVIEW.png',
    features: [
      'Portfolio dashboard with live contract values',
      'Budget vs actual across all projects',
      'S-curve forecasting & variance analysis',
      'L1/L2/L3 role-gated project access',
    ],
  },
  {
    id: 'cms',
    tag: 'CMS',
    name: 'Crewing Management System',
    description: 'Full crew lifecycle from onboarding to offboarding.',
    color: '#7c3aed',
    icon: Users,
    screenshot: 'PMS crewing.png',
    features: [
      'Complete crew records — every position covered',
      'Auto-alerts at 90, 30, and 0 days before cert expiry',
      '24-cycle rotation management per year',
      'Statement auto-calculated, flows to project budget',
    ],
  },
  {
    id: 'scm',
    tag: 'SCM',
    name: 'Supply Chain Management',
    description: 'Full procurement lifecycle, every transaction tagged.',
    color: '#f59e0b',
    icon: Package,
    screenshot: 'PMS SCM.png',
    features: [
      'MSR → PO → DO — zero manual reference tracking',
      'Real-time inventory with reorder alerts at 5 units',
      'Vendor directory & payment tracking (OS Days)',
      'Auto-charged to requesting project budget',
    ],
  },
  {
    id: 'pcm',
    tag: 'PCM',
    name: 'Project Cost Management',
    description: 'Financial intelligence per project, live.',
    color: '#10b981',
    icon: DollarSign,
    screenshot: 'PMS financial.png',
    features: [
      'Manpower · Materials · Machinery · Special Services',
      'Real-time burn rate & risk analysis per day',
      'Forecast mode for future financial planning',
      'Pulls live from SCM + CMS — zero re-entry',
    ],
  },
]

export const MODULE_ACCENTS: Record<string, string> = {
  PMS: '#00c6d7',
  CMS: '#7c3aed',
  SCM: '#f59e0b',
  PCM: '#10b981',
}

export type StickyScrollPanel = {
  id: string
  moduleTag: 'PMS' | 'CMS' | 'SCM' | 'PCM'
  screenLabel: string
  title: string
  body: string
  screenshot: string
  features: string[]
}

/** Sticky-scroll panels — one per key platform screen */
export const STICKY_SCROLL_PANELS: StickyScrollPanel[] = [
  {
    id: 'overview',
    moduleTag: 'PMS',
    screenLabel: 'Portfolio Overview',
    title: 'Your entire portfolio. One live view.',
    body: 'See every active contract, status, and value from a single executive dashboard — no spreadsheet consolidation.',
    screenshot: 'OVERVIEW.png',
    features: [
      'Live contract values across all active projects',
      'Status and milestone tracking per engagement',
      'Drill-down from portfolio to project detail',
      'Role-gated views: L1 Admin / L2 PM / L3 Viewer',
    ],
  },
  {
    id: 'pms-analytics',
    moduleTag: 'PMS',
    screenLabel: 'Project Analytics',
    title: 'Every project. Every ringgit. Live.',
    body: 'Real-time visibility across all active contracts — from portfolio level down to daily cost variance and S-curve performance.',
    screenshot: 'pms_dashboard_analytics.png',
    features: [
      'Budget vs actual updated in real time',
      'S-curve forecasting and EAC variance',
      'Daily burn and trend visualisation',
      'Forecast mode for forward planning',
    ],
  },
  {
    id: 'roster',
    moduleTag: 'CMS',
    screenLabel: 'Crew Roster',
    title: 'Full crew control. Zero compliance gaps.',
    body: 'Master roster for every position — offshore, onshore, and support — with deployment status always current.',
    screenshot: 'ROSTER.png',
    features: [
      'Complete crew records for every position',
      'Deployment and rotation status at a glance',
      'Auto-alerts: 90, 30, and 0 days before cert expiry',
      'BOSIET / APC / PCSB compliance flags',
    ],
  },
  {
    id: 'matrix',
    moduleTag: 'CMS',
    screenLabel: 'Certification Matrix',
    title: 'Certification matrix. Always audit-ready.',
    body: 'Track mandatory and client-specific certifications across crew, position, and project — before auditors ask.',
    screenshot: 'MATRIX.png',
    features: [
      'Matrix view by crew member and position',
      'Colour-coded expiry and compliance status',
      'Filter by project, vessel, or cert type',
      'Export-ready for client and PETRONAS audits',
    ],
  },
  {
    id: 'statement',
    moduleTag: 'CMS',
    screenLabel: 'Crew Statements',
    title: 'Crew statements. Calculated automatically.',
    body: 'Man-day rates, allowances, and project allocations computed in-system — then charged directly to project budgets.',
    screenshot: 'STATEMENT.png',
    features: [
      'Auto-calculated statements from roster data',
      'Project and cost-code allocation built in',
      'Approval workflow before posting',
      'Flows to PCM with zero manual re-entry',
    ],
  },
  {
    id: 'hris',
    moduleTag: 'CMS',
    screenLabel: 'HRIS Dashboard',
    title: 'Workforce intelligence at a glance.',
    body: 'Headcount, deployment, and compliance KPIs for HR and operations leadership — one dashboard, not five reports.',
    screenshot: 'HRIS DASHBOARD.png',
    features: [
      'Workforce KPIs and headcount summary',
      'Deployment vs bench visibility',
      'Certification compliance percentage',
      'Department and project breakdown',
    ],
  },
  {
    id: 'scm-procurement',
    moduleTag: 'SCM',
    screenLabel: 'Supply Chain',
    title: 'From request to delivery. Every step tracked.',
    body: 'Full procurement chain — MSR to PO to DO — with every line item tagged to the correct project and budget.',
    screenshot: 'PMS SCM2.png',
    features: [
      'MSR → PO → DO with zero manual references',
      'Real-time inventory with reorder alert at 5 units',
      'Vendor directory and OS Days payment tracking',
      'Auto-charged to requesting project budget',
    ],
  },
  {
    id: 'pob',
    moduleTag: 'SCM',
    screenLabel: 'Person on Board',
    title: 'Person on board. Headcount you can trust.',
    body: 'Know exactly who is offshore, on rotation, or awaiting deployment — aligned to vessel and project demand.',
    screenshot: 'POB.png',
    features: [
      'Live person-on-board count by project',
      'Rotation and manifest alignment',
      'Vessel and location assignment',
      'Export for operations and client reporting',
    ],
  },
  {
    id: 'pms-budget',
    moduleTag: 'PCM',
    screenLabel: 'Project Budget',
    title: 'Know your burn rate. Before it burns you.',
    body: 'Five cost categories tracked per project with live data pulled from SCM and CMS — no duplicate entry, no month-end surprises.',
    screenshot: 'PMS budget.png',
    features: [
      'Manpower · Materials · Machinery · Special Services',
      'Real-time burn rate per day with risk flags',
      'Budget vs actual by cost category',
      'Zero re-entry — auto-pulled from SCM + CMS',
    ],
  },
]

/** @deprecated Use STICKY_SCROLL_PANELS */
export const STICKY_SCROLL_MODULES = STICKY_SCROLL_PANELS.map((p) => ({
  id: p.id,
  tag: p.moduleTag,
  title: p.title,
  body: p.body,
  accent: MODULE_ACCENTS[p.moduleTag],
  screenshot: p.screenshot,
  features: p.features,
}))

export type ModuleDive = {
  id: string
  theme: 'light' | 'dark'
  imageSide: 'left' | 'right'
  eyebrow: string
  title: string
  body: string
  features: string[]
  primaryImage: string
  secondaryImage: string
}

export const MODULE_DIVES: ModuleDive[] = [
  {
    id: 'pms-dive',
    theme: 'light',
    imageSide: 'left',
    eyebrow: 'Project Management System',
    title: 'Every project.\nEvery ringgit. Live.',
    body: 'Real-time visibility across all active contracts — from portfolio level down to daily cost variance.',
    features: [
      'Live portfolio dashboard with contract values',
      'Budget vs actual updated in real time',
      'S-curve forecasting & EAC variance',
      'Role-gated access: L1 Admin / L2 PM / L3 Viewer',
    ],
    primaryImage: 'pms_dashboard_analytics.png',
    secondaryImage: 'FORECAST.png',
  },
  {
    id: 'cms-dive',
    theme: 'dark',
    imageSide: 'right',
    eyebrow: 'Crewing Management System',
    title: 'Full crew control.\nZero compliance gaps.',
    body: 'From onboarding to rotation to cert expiry — automated and always current.',
    features: [
      'Master crew database — all positions covered',
      'Auto-alerts: 90, 30, 0 days before cert expiry',
      '24-rotation cycle management per year',
      'BOSIET / APC / PCSB compliance tracking',
    ],
    primaryImage: 'ROSTER.png',
    secondaryImage: 'MATRIX.png',
  },
  {
    id: 'scm-dive',
    theme: 'light',
    imageSide: 'left',
    eyebrow: 'Supply Chain Management',
    title: 'From request to delivery.\nEvery step tracked.',
    body: 'Full procurement chain — MSR to PO to DO — every transaction tagged to the right project.',
    features: [
      'MSR → PO → DO with zero manual references',
      'Real-time inventory, reorder alerts at 5 units',
      'Vendor directory & OS Days payment tracking',
      'Auto-charged to requesting project budget',
    ],
    primaryImage: 'PMS SCM2.png',
    secondaryImage: 'POB.png',
  },
  {
    id: 'pcm-dive',
    theme: 'dark',
    imageSide: 'right',
    eyebrow: 'Project Cost Management',
    title: 'Know your burn rate.\nBefore it burns you.',
    body: 'Five cost categories tracked per project. Live data pulled from SCM and CMS — no re-entry.',
    features: [
      'Manpower · Materials · Machinery · Special Services',
      'Real-time burn rate per day with risk flags',
      'Forecast mode for future financial planning',
      'Zero re-entry — auto-pulled from SCM + CMS',
    ],
    primaryImage: 'PMS budget.png',
    secondaryImage: 'PMS financial.png',
  },
]
