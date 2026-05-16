import { redirect } from "next/navigation";

export const metadata = {
  title: "Events Admin",
};

export default function ProjectsPage() {
  redirect("/admin/events");
}
