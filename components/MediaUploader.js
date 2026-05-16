"use client";

import { Upload, Video } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isVideoUrl } from "@/lib/utils";

export default function MediaUploader({
  coverMedia,
  media = [],
  title,
  uploading = false,
  onCoverChange,
  onUpload,
  onRemove,
  onSetCover,
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">Cover Media</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Primary image or video for public function cards and hero sections.
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
            <Upload className="h-4 w-4" />
            Upload Cover
            <input
              type="file"
              className="hidden"
              accept="image/*,video/*"
              disabled={uploading}
              onChange={(event) => onUpload(event.target.files, { setAsCover: true })}
            />
          </label>
        </div>

        <Input
          value={coverMedia}
          onChange={(event) => onCoverChange(event.target.value)}
          placeholder="https://res.cloudinary.com/... or /rbk/..."
          required
          className="mt-5"
        />

        {coverMedia ? (
          <EventMedia
            src={coverMedia}
          alt={title || "Function cover media"}
            controls={isVideoUrl(coverMedia)}
            className="mt-4 aspect-[16/10] rounded-md border border-border"
          />
        ) : null}
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">Gallery Photos & Videos</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add the Cloudinary media that should automatically appear on this function page.
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10">
            <Upload className="h-4 w-4" />
            Add Media
            <input
              type="file"
              className="hidden"
              accept="image/*,video/*"
              multiple
              disabled={uploading}
              onChange={(event) => onUpload(event.target.files)}
            />
          </label>
        </div>

        <div className="mt-5 grid gap-3">
          {media.length ? (
            media.map((url) => (
              <div
                key={url}
                className="grid gap-3 rounded-md border border-border bg-muted/50 p-3 sm:grid-cols-[64px_1fr_auto]"
              >
                {isVideoUrl(url) ? (
                  <div className="grid h-16 w-16 place-items-center rounded-md bg-white/5">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                ) : (
                  <EventMedia src={url} alt="Uploaded media" className="h-16 w-16 rounded-md" />
                )}
                <p className="min-w-0 self-center break-all text-sm text-muted-foreground sm:truncate">
                  {url}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <Button type="button" variant="ghost" size="sm" onClick={() => onSetCover(url)}>
                    Set Cover
                  </Button>
                  <Button type="button" variant="ghost" size="sm" onClick={() => onRemove(url)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="rounded-md border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
              No gallery media yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
