import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Deepblue Capital Partners invests across multifamily and affordable rental housing in the high-growth Sunbelt with flexible capital, disciplined underwriting, and hands-on operations.",
};

export default function InvestmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
