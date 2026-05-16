import { profileIdentity } from "@/lib/profile-content";
import LoginForm from "@/components/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Admin Login",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,179,106,0.14),transparent_30%),linear-gradient(180deg,#080808_0%,#030303_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
      <Card className="relative w-full max-w-md">
        <CardHeader>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">{profileIdentity.brandName}</p>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Sign in to manage functions, Cloudinary uploads, and inquiries.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm redirectTo="/admin/events" />
        </CardContent>
      </Card>
    </div>
  );
}
