"use client";

import { useState } from "react";
import { LoaderCircle, Save, Upload } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { defaultSiteMedia, siteMediaGroups } from "@/lib/site-media";
import { isVideoUrl } from "@/lib/utils";

export default function AdminSettingsForm({ settings }) {
  const [form, setForm] = useState(() => ({
    ...settings,
    media: {
      ...defaultSiteMedia,
      ...(settings.media || {}),
    },
  }));
  const [saving, setSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  function updateField(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };

      if (field === "heroVideoUrl") {
        next.media = { ...(current.media || {}), homeHeroVideo: value };
      }

      if (field === "heroPosterUrl") {
        next.media = { ...(current.media || {}), homeHeroPoster: value };
      }

      return next;
    });
  }

  function updateMediaField(key, value) {
    setForm((current) => {
      const next = {
        ...current,
        media: {
          ...(current.media || {}),
          [key]: value,
        },
      };

      if (key === "homeHeroVideo") {
        next.heroVideoUrl = value;
      }

      if (key === "homeHeroPoster") {
        next.heroPosterUrl = value;
      }

      return next;
    });
  }

  async function uploadFile(files, field) {
    const file = files?.[0];

    if (!file) {
      return;
    }

    setUploadingField(field);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData();
      formData.append("files", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to upload media.");
      }

      updateField(field, data.file.url);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setUploadingField("");
    }
  }

  async function uploadMediaFile(files, key) {
    const file = files?.[0];

    if (!file) {
      return;
    }

    setUploadingField(`media.${key}`);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData();
      formData.append("files", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to upload media.");
      }

      updateMediaField(key, data.file.url);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setUploadingField("");
    }
  }

  function resetMediaField(key) {
    updateMediaField(key, defaultSiteMedia[key] || "");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to save settings.");
      }

      setForm(data.settings);
      setStatus({ type: "success", message: "Site settings updated." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_440px]">
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-2">
            <Label htmlFor="heroEyebrow">Hero Label</Label>
            <Input
              id="heroEyebrow"
              value={form.heroEyebrow || ""}
              onChange={(event) => updateField("heroEyebrow", event.target.value)}
              placeholder="Celebration & Function Organisation"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="heroTitle">Hero Headline</Label>
            <Input
              id="heroTitle"
              value={form.heroTitle || ""}
              onChange={(event) => updateField("heroTitle", event.target.value)}
              placeholder="Elegant celebrations, designed with care."
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="heroDescription">Hero Description</Label>
            <Textarea
              id="heroDescription"
              value={form.heroDescription || ""}
              onChange={(event) => updateField("heroDescription", event.target.value)}
              placeholder="Describe the event experience shown in the hero."
              rows={7}
            />
          </div>

          {status.message ? (
            <p className={status.type === "success" ? "text-sm text-primary" : "text-sm text-destructive"}>
              {status.message}
            </p>
          ) : null}

          <Button type="submit" size="lg" disabled={saving || Boolean(uploadingField)}>
            {saving ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {saving ? "Saving..." : "Save Site Settings"}
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-5 p-6">
            <div>
              <p className="text-sm font-medium text-foreground">Hero Video</p>
              <p className="mt-1 text-sm leading-7 text-muted-foreground">
                Upload a Cloudinary video or paste a video URL. This controls the public home hero.
              </p>
            </div>
            <Input
              value={form.heroVideoUrl || ""}
              onChange={(event) => updateField("heroVideoUrl", event.target.value)}
              placeholder="https://res.cloudinary.com/.../video/upload/..."
            />
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
              <Upload className="h-4 w-4" />
              {uploadingField === "heroVideoUrl" ? "Uploading..." : "Upload Hero Video"}
              <input
                type="file"
                className="hidden"
                accept="video/*"
                disabled={Boolean(uploadingField)}
                onChange={(event) => uploadFile(event.target.files, "heroVideoUrl")}
              />
            </label>
            {form.heroVideoUrl ? (
              <EventMedia
                src={form.heroVideoUrl}
                alt="Hero video preview"
                controls={isVideoUrl(form.heroVideoUrl)}
                className="aspect-[16/10] rounded-md border border-border"
              />
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-5 p-6">
            <div>
              <p className="text-sm font-medium text-foreground">Hero Poster / Fallback Image</p>
              <p className="mt-1 text-sm leading-7 text-muted-foreground">
                Used while the video loads and as the fallback visual.
              </p>
            </div>
            <Input
              value={form.heroPosterUrl || ""}
              onChange={(event) => updateField("heroPosterUrl", event.target.value)}
              placeholder="https://res.cloudinary.com/.../image/upload/..."
            />
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
              <Upload className="h-4 w-4" />
              {uploadingField === "heroPosterUrl" ? "Uploading..." : "Upload Poster"}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                disabled={Boolean(uploadingField)}
                onChange={(event) => uploadFile(event.target.files, "heroPosterUrl")}
              />
            </label>
            {form.heroPosterUrl ? (
              <EventMedia
                src={form.heroPosterUrl}
                alt="Hero poster preview"
                className="aspect-[16/10] rounded-md border border-border"
              />
            ) : null}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 xl:col-span-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Site Photos</p>
          <h2 className="mt-2 font-heading text-3xl leading-tight text-foreground">
            Replace fixed images across every page.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            These controls cover the public logo, home page visuals, About page photos, Events page
            fallback image, Contact page image, and default social image. Event gallery photos are
            still managed from each Function entry.
          </p>
        </div>

        {Object.entries(siteMediaGroups).map(([group, fields]) => (
          <Card key={group}>
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{group}</p>
                <h3 className="mt-2 font-heading text-2xl leading-tight text-foreground">
                  {group} Media
                </h3>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {fields.map((field) => {
                  const value = form.media?.[field.key] || "";
                  const uploading = uploadingField === `media.${field.key}`;

                  return (
                    <div
                      key={field.key}
                      className="rounded-lg border border-border bg-background/45 p-4"
                    >
                      <div className="grid gap-2">
                        <Label htmlFor={`media-${field.key}`}>{field.label}</Label>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {field.description}
                        </p>
                        <Input
                          id={`media-${field.key}`}
                          value={value}
                          onChange={(event) => updateMediaField(field.key, event.target.value)}
                          placeholder={field.defaultSrc}
                        />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
                          <Upload className="h-4 w-4" />
                          {uploading ? "Uploading..." : `Upload ${field.type === "video" ? "Video" : "Photo"}`}
                          <input
                            type="file"
                            className="hidden"
                            accept={field.type === "video" ? "video/*" : "image/*"}
                            disabled={Boolean(uploadingField)}
                            onChange={(event) => uploadMediaFile(event.target.files, field.key)}
                          />
                        </label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="border-border"
                          onClick={() => resetMediaField(field.key)}
                          disabled={Boolean(uploadingField)}
                        >
                          Reset Default
                        </Button>
                      </div>

                      {value ? (
                        <EventMedia
                          src={value}
                          alt={`${field.label} preview`}
                          controls={field.type === "video" || isVideoUrl(value)}
                          className="mt-4 aspect-[16/10] rounded-md border border-border"
                          mediaClassName={field.key === "brandLogo" ? "object-contain p-4" : ""}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </form>
  );
}
