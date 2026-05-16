import { redirect } from "next/navigation";

export const metadata = {
  title: "Events",
};

export default async function LegacyProjectDetailPage({ params }) {
  const { slug } = await params;
  redirect(`/events/${slug}`);
}
