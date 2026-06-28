import { ogCard, OG_SIZE } from "@/lib/og-card";

export const alt = "Emirhan Naneli — Backend Developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("en");
}
