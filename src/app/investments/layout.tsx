import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Deepblue Value-Add Fund targeting 14-16% gross IRR through value-add rental housing in supply-constrained Sunbelt submarkets.",
};

export default function InvestmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
