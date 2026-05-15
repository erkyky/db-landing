import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A complementary leadership team with 27+ years of combined senior real estate experience across acquisitions, capital formation, and asset management.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
