import ProjectForm from "@/components/ProjectForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "New Project",
};

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Create</p>
          <CardTitle className="mt-2">New Project</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
          Add a new cinematic project with Cloudinary-hosted media and category metadata.
        </CardContent>
      </Card>
      <ProjectForm />
    </div>
  );
}
