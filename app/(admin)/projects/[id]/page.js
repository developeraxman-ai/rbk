import { redirect } from "next/navigation";

export const metadata = {
  title: "Events Admin",
};

export default function EditProjectPage() {
  redirect("/admin/events");
}
