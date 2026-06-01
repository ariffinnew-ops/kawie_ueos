export type TimelineComparisonItem = {
  id: string
  /** Even-index items swap solution/problem sides */
  swap: boolean
  terminal: {
    command: string
    error: string
    footer: string
  }
  solution: {
    lines: string[]
    module: string
  }
}

export const TIMELINE_COMPARISON_ITEMS: TimelineComparisonItem[] = [
  {
    id: 'crew',
    swap: false,
    terminal: {
      command: '$ status --check',
      error:
        'Crew roster scattered across\n        Excel files and WhatsApp groups.',
      footer: '> last_updated: nobody knows',
    },
    solution: {
      lines: [
        'One live crew dashboard.',
        'Every position, every status —',
        'single source of truth, always current.',
      ],
      module: 'CMS',
    },
  },
  {
    id: 'budget',
    swap: true,
    terminal: {
      command: '$ budget --report',
      error:
        'Overrun detected at month-end close.\n        Decision window: expired.',
      footer: '> action: too late',
    },
    solution: {
      lines: [
        'Real-time burn rate, updated every day.',
        'Catch variance before it becomes a crisis.',
      ],
      module: 'PCM',
    },
  },
  {
    id: 'compliance',
    swap: false,
    terminal: {
      command: '$ compliance --check crew',
      error:
        'BOSIET cert expired: 3 crew members\n        APC cert expiring: untracked',
      footer: '> offshore_status: risk',
    },
    solution: {
      lines: [
        'Auto-alerts at 90, 30, and 0 days',
        'before every certificate expires.',
        'Zero compliance gaps.',
      ],
      module: 'CMS',
    },
  },
  {
    id: 'audit',
    swap: true,
    terminal: {
      command: '$ audit --prepare',
      error:
        'Data scattered across 6 folders.\n        Manual assembly required.',
      footer: '> estimated_time: 3 days',
    },
    solution: {
      lines: [
        'Immutable audit trails, always ready.',
        'Export everything in one click.',
        'PETRONAS-audit ready, anytime.',
      ],
      module: 'PMS',
    },
  },
  {
    id: 'system',
    swap: false,
    terminal: {
      command: '$ system --status',
      error: '3 tools. 3 logins.\n        Data entered 3 times.',
      footer: '> efficiency: critical',
    },
    solution: {
      lines: [
        'One platform. One login.',
        'Data flows automatically across',
        'PMS, CMS, SCM, and PCM.',
      ],
      module: 'UEOS',
    },
  },
]

export const TIMELINE_STATS = [
  { value: '4x', label: 'faster audit readiness' },
  { value: '0', label: 'manual data re-entry' },
  { value: '100%', label: 'real-time visibility' },
] as const
