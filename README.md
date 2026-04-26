# RBK Events

Premium cinematic portfolio and admin CMS for an event-led visual brand by Raghavendra B Kolar.

## Stack

- Next.js `15.5.9` with App Router, JavaScript only
- Tailwind CSS v4
- shadcn/ui-style component setup
- Framer Motion
- MongoDB Atlas with Mongoose
- Cloudinary for image/video storage
- JWT auth in HTTP-only cookies
- Vercel-ready deployment

## Features

- Cinematic dark-mode portfolio with fullscreen video hero
- Masonry portfolio grid with category filters
- Dynamic project detail pages using slugs
- Story-driven about page and inquiry form with WhatsApp CTA
- Admin login, dashboard, projects table, create/edit/delete workflows
- Cloudinary upload API for multiple images/videos
- MongoDB-backed projects and inquiries
- Middleware protection for admin pages and mutation routes
- Demo content fallback for public/admin preview when MongoDB is not configured

## Project Structure

```text
app
  (public)
  (admin)
  api
components
  ui
lib
models
scripts
middleware.js
```

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Fill in these values in `.env.local`:

   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NEXT_PUBLIC_HERO_VIDEO_URL` (optional)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` (optional)

4. Seed the initial admin and sample portfolio data:

   ```bash
   npm run seed
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

6. Open:

   - Public site: `http://localhost:3000`
   - Admin login: `http://localhost:3000/login`

## Auth Notes

- Admin JWTs are stored in the `rbk_admin_token` HTTP-only cookie.
- Middleware protects:
  - `/dashboard`
  - `/projects`
  - `POST/PUT/DELETE` project APIs
  - `/api/upload`
- If the user collection is empty, the login route can bootstrap the first admin from `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## API Overview

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/[id]`
- `PUT /api/projects/[id]`
- `DELETE /api/projects/[id]`
- `POST /api/upload`
- `POST /api/contact`

## Cloudinary Upload Flow

- Admin form sends `multipart/form-data` to `/api/upload`
- Route handler uploads buffers to Cloudinary
- Route returns secure URLs
- Project records store those URLs in MongoDB

## Deployment on Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add all environment variables from `.env.example` in the Vercel dashboard.
4. Deploy.
5. After deployment, seed your database once by running:

   ```bash
   npm run seed
   ```

   or sign in once with `ADMIN_EMAIL` and `ADMIN_PASSWORD` to bootstrap the first admin.

## Verification

- `npm run lint`
- `npm run build`

Both pass on Next.js `15.5.9`.
