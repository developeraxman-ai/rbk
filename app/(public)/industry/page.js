import { redirect } from "next/navigation";

export const metadata = {
  title: "Events",
};

export default function IndustryPage() {
  redirect("/events");
}
