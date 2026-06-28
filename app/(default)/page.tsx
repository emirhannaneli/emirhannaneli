import { Portfolio } from "@/components/portfolio";
import { resolveContent } from "@/lib/content";

export default function HomePage() {
  return <Portfolio content={resolveContent("en")} locale="en" />;
}
