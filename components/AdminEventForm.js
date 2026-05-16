"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, LoaderCircle, Plus, Trash2 } from "lucide-react";

import MediaUploader from "@/components/MediaUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { eventCategories } from "@/lib/event-categories";
import { slugify } from "@/lib/utils";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  category: "wedding",
  coverMedia: "",
  media: [],
  featured: false,
  testimonials: [],
};

function toDateInputValue(value) {
  if (!value) {
    return "";
  }

  return new Date(value).toISOString().slice(0, 10);
}

function normalizeEventForForm(event) {
  if (!event) {
    return emptyForm;
  }

  return {
    ...emptyForm,
    ...event,
    date: toDateInputValue(event.date),
    media: event.media || [],
    testimonials: event.testimonials || [],
  };
}

export default function AdminEventForm({ mode = "create", event }) {
  const router = useRouter();
  const [form, setForm] = useState(normalizeEventForForm(event));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const slugPreview = useMemo(() => slugify(form.title), [form.title]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function uploadFiles(files, { setAsCover = false } = {}) {
    if (!files?.length) {
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to upload files.");
      }

      const urls = data.files.map((file) => file.url);

      setForm((current) => ({
        ...current,
        coverMedia: setAsCover ? urls[0] : current.coverMedia || urls[0],
        media: Array.from(new Set([...(current.media || []), ...urls])),
      }));
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploading(false);
    }
  }

  function removeMedia(url) {
    setForm((current) => {
      const nextMedia = current.media.filter((item) => item !== url);

      return {
        ...current,
        media: nextMedia,
        coverMedia: current.coverMedia === url ? nextMedia[0] || "" : current.coverMedia,
      };
    });
  }

  function addTestimonial() {
    setForm((current) => ({
      ...current,
      testimonials: [...(current.testimonials || []), { name: "", role: "", quote: "" }],
    }));
  }

  function updateTestimonial(index, field, value) {
    setForm((current) => ({
      ...current,
      testimonials: (current.testimonials || []).map((testimonial, itemIndex) =>
        itemIndex === index ? { ...testimonial, [field]: value } : testimonial
      ),
    }));
  }

  function removeTestimonial(index) {
    setForm((current) => ({
      ...current,
      testimonials: (current.testimonials || []).filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    setSaving(true);
    setError("");

    try {
      const endpoint = mode === "edit" ? `/api/events/${event._id}` : "/api/events";
      const method = mode === "edit" ? "PUT" : "POST";
      const payload = {
        ...form,
        media: Array.from(new Set([form.coverMedia, ...(form.media || [])].filter(Boolean))),
        testimonials: (form.testimonials || []).filter(
          (testimonial) => testimonial.name.trim() && testimonial.quote.trim()
        ),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to save event.");
      }

      router.push("/admin/events");
      router.refresh();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_440px]">
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Function Title</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(inputEvent) => updateField("title", inputEvent.target.value)}
              placeholder="Royal ceremony"
              required
            />
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Public URL: /events/{slugPreview || "function-title"}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="date">Function Date</Label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={form.date || ""}
                  onChange={(inputEvent) => updateField("date", inputEvent.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Function Type</Label>
              <Select value={form.category} onValueChange={(value) => updateField("category", value)}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(inputEvent) => updateField("description", inputEvent.target.value)}
              placeholder="Describe the function flow, decor, stage, rituals, guest experience, and media needs."
              required
              rows={8}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">Featured Function</p>
              <p className="text-sm text-muted-foreground">
                Feature this event on the home page and priority public grids.
              </p>
            </div>
            <Switch checked={form.featured} onCheckedChange={(checked) => updateField("featured", checked)} />
          </div>

          <div className="space-y-4 rounded-lg border border-border bg-card p-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">Event Testimonials</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  Add host feedback for this event. These testimonials appear on the public event
                  gallery page.
                </p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addTestimonial}>
                <Plus className="h-4 w-4" />
                Add Testimonial
              </Button>
            </div>

            {(form.testimonials || []).length ? (
              <div className="grid gap-4">
                {form.testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-4 rounded-md border border-border bg-muted/40 p-4">
                    <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
                      <div className="grid gap-2">
                        <Label htmlFor={`testimonial-name-${index}`}>Person Name</Label>
                        <Input
                          id={`testimonial-name-${index}`}
                          value={testimonial.name}
                          onChange={(inputEvent) =>
                            updateTestimonial(index, "name", inputEvent.target.value)
                          }
                          placeholder="Client or host name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor={`testimonial-role-${index}`}>Label / Event Role</Label>
                        <Input
                          id={`testimonial-role-${index}`}
                          value={testimonial.role || ""}
                          onChange={(inputEvent) =>
                            updateTestimonial(index, "role", inputEvent.target.value)
                          }
                          placeholder="Bride's family, Event host, HR lead"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTestimonial(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`testimonial-quote-${index}`}>Testimonial</Label>
                      <Textarea
                        id={`testimonial-quote-${index}`}
                        value={testimonial.quote}
                        onChange={(inputEvent) =>
                          updateTestimonial(index, "quote", inputEvent.target.value)
                        }
                        placeholder="Write the person's testimonial for this event."
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-md border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
                No testimonials added yet.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <MediaUploader
          coverMedia={form.coverMedia}
          media={form.media}
          title={form.title}
          uploading={uploading}
          onCoverChange={(value) => updateField("coverMedia", value)}
          onUpload={uploadFiles}
          onRemove={removeMedia}
          onSetCover={(url) => updateField("coverMedia", url)}
        />

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg" disabled={saving || uploading}>
            {saving ? "Saving..." : mode === "edit" ? "Update Function" : "Create Function"}
          </Button>
          {saving || uploading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              {uploading ? "Uploading media..." : "Publishing function..."}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
