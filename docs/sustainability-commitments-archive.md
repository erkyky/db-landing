# Sustainability — "Our Commitments" section (archived)

Removed from `src/app/sustainability/page.tsx` on 2026-06-03 for future reuse.
Section eyebrow: **Our Commitments**

Heading:

> Measurable targets, not just intentions.

Image used in the section: `/sustainability/industry.jpg` (moved to the bottom of the "Our Approach" section as a full-width image strip).

## Commitment stats

| Stat | Label | Detail |
|---|---|---|
| 100% | ESG-screened deals | Every acquisition passes environmental, social, and governance review during underwriting. |
| Net Zero | Operational target | Working toward net-zero carbon across the managed portfolio via efficiency upgrades and renewables. |
| 30% | Water reduction goal | Smart-system retrofits and drought-tolerant landscaping driving measurable water savings. |

## Original data array (drop-in for `page.tsx`)

```ts
const commitments: Array<{ stat: string; label: string; detail: string }> = [
  {
    stat: "100%",
    label: "ESG-screened deals",
    detail: "Every acquisition passes environmental, social, and governance review during underwriting.",
  },
  {
    stat: "Net Zero",
    label: "Operational target",
    detail: "Working toward net-zero carbon across the managed portfolio via efficiency upgrades and renewables.",
  },
  {
    stat: "30%",
    label: "Water reduction goal",
    detail: "Smart-system retrofits and drought-tolerant landscaping driving measurable water savings.",
  },
];
```
