import "../globals.css";
import { BaseHtml } from "@/components/base-html";
import { localeMetadata, viewport as vp } from "@/lib/seo";

export const viewport = vp;
export const metadata = localeMetadata("en");

export default function DefaultRootLayout({ children }: { children: React.ReactNode }) {
  return <BaseHtml lang="en">{children}</BaseHtml>;
}
