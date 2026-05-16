# RBK Events

Premium event-company website and admin CMS for marriages, receptions, engagements, birthday functions, family celebrations, decor coordination, Cloudinary galleries, and event media.

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

- Premium dark-mode marriage and function organiser landing page with fullscreen video hero support
- Dynamic events page with category filters, clickable image/video cards, and individual function gallery pages
- About Us page focused on the company story, philosophy, and event approach
- Inquiry form and preserved WhatsApp CTA flow
- Admin login, dashboard, functions table, create/edit/delete workflows
- Cloudinary upload API for multiple images/videos
- MongoDB-backed events and inquiries
- Middleware protection for admin pages and mutation routes
- Demo marriage/function fallback for public/admin preview when MongoDB is not configured

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

4. Seed the initial admin and sample event data:

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
   - Events admin: `http://localhost:3000/admin/events`

## Auth Notes

- Admin JWTs are stored in the `rbk_admin_token` HTTP-only cookie.
- Middleware protects:
  - `/dashboard`
  - `/admin/events`
  - `/projects`
  - `POST/PUT/DELETE` event and project APIs
  - `/api/upload`
- If the user collection is empty, the login route can bootstrap the first admin from `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## API Overview

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/events`
- `POST /api/events`
- `GET /api/events/[id]`
- `PUT /api/events/[id]`
- `DELETE /api/events/[id]`
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
- Route returns secure Cloudinary URLs
- Event records store those URLs in MongoDB, and `/events/[slug]` renders the media for that individual function

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
