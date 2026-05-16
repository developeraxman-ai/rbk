"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function DeleteEventButton({ eventId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm("Delete this function?");

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to delete function.");
      }

      router.push("/admin/events");
      router.refresh();
    } catch (error) {
      window.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="destructive" onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete Function"}
    </Button>
  );
}
