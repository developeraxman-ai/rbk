import { redirect } from "next/navigation";

export const metadata = {
  title: "New Event",
};

export default function NewProjectPage() {
  redirect("/admin/events/new");
}
