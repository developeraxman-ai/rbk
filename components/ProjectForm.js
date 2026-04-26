"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Upload, Video } from "lucide-react";

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
import { isVideoUrl, slugify } from "@/lib/utils";

const emptyForm = {
  title: "",
  description: "",
  category: "event",
  coverImage: "",
  media: [],
  clientName: "",
  featured: false,
};

export default function ProjectForm({ mode = "create", project }) {
  const router = useRouter();
  const [form, setForm] = useState(project || emptyForm);
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
        coverImage: setAsCover ? urls[0] : current.coverImage || urls[0],
        media: setAsCover ? Array.from(new Set([...(current.media || []), ...urls])) : Array.from(new Set([...(current.media || []), ...urls])),
      }));
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const endpoint = mode === "edit" ? `/api/projects/${project._id}` : "/api/projects";
      const method = mode === "edit" ? "PUT" : "POST";
      const payload = {
        ...form,
        media: Array.from(new Set([form.coverImage, ...(form.media || [])].filter(Boolean))),
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
        throw new Error(data.error || "Unable to save project.");
      }

      router.push("/projects");
      router.refresh();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSaving(false);
    }
  }

  function removeMedia(url) {
    setForm((current) => ({
      ...current,
      media: current.media.filter((item) => item !== url),
      coverImage: current.coverImage === url ? current.media.find((item) => item !== url) || "" : current.coverImage,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 xl:grid-cols-[1fr_420px]">
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="Noir launch film"
              required
            />
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Slug: /project/{slugPreview || "project-title"}
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={form.clientName}
              onChange={(event) => updateField("clientName", event.target.value)}
              placeholder="Client or production house"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={form.category} onValueChange={(value) => updateField("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="celebrity">Celebrity</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
              placeholder="Describe the mood, visual language, and production details."
              required
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">Featured Project</p>
              <p className="text-sm text-muted-foreground">Surface this project more prominently.</p>
            </div>
            <Switch checked={form.featured} onCheckedChange={(checked) => updateField("featured", checked)} />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Cover Image</p>
                <p className="text-sm text-muted-foreground">Primary frame for the grid and detail hero.</p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
                <Upload className="h-4 w-4" />
                Upload
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,video/*"
                  onChange={(event) => uploadFiles(event.target.files, { setAsCover: true })}
                />
              </label>
            </div>

            <Input
              value={form.coverImage}
              onChange={(event) => updateField("coverImage", event.target.value)}
              placeholder="https://res.cloudinary.com/..."
              required
            />

            {form.coverImage ? (
              <div className="relative overflow-hidden rounded-lg border border-white/10">
                {isVideoUrl(form.coverImage) ? (
                  <video src={form.coverImage} controls className="h-64 w-full object-cover" />
                ) : (
                  <div className="relative h-64 w-full">
                    <Image src={form.coverImage} alt={form.title || "Cover image"} fill className="object-cover" />
                  </div>
                )}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Media Gallery</p>
                <p className="text-sm text-muted-foreground">Upload multiple images or videos.</p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
                <Upload className="h-4 w-4" />
                Add Media
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,video/*"
                  multiple
                  onChange={(event) => uploadFiles(event.target.files)}
                />
              </label>
            </div>

            <div className="grid gap-3">
              {form.media?.length ? (
                form.media.map((url) => (
                  <div
                    key={url}
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {isVideoUrl(url) ? (
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/5">
                          <Video className="h-5 w-5 text-primary" />
                        </div>
                      ) : (
                        <div className="relative h-12 w-12 overflow-hidden rounded-md">
                          <Image src={url} alt="Uploaded media" fill className="object-cover" />
                        </div>
                      )}
                      <p className="truncate text-sm text-muted-foreground">{url}</p>
                    </div>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeMedia(url)}>
                      Remove
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No media uploaded yet.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg" disabled={saving || uploading}>
            {saving ? "Saving..." : mode === "edit" ? "Update Project" : "Create Project"}
          </Button>
          {(saving || uploading) ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              {uploading ? "Uploading media..." : "Publishing project..."}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
