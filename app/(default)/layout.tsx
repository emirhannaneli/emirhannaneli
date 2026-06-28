import "../globals.css";
import { BaseHtml } from "@/components/base-html";

export default function DefaultRootLayout({ children }: { children: React.ReactNode }) {
  return <BaseHtml lang="en">{children}</BaseHtml>;
}
