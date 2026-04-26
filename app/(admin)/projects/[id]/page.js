import { notFound } from "next/navigation";

import DeleteProjectButton from "@/components/DeleteProjectButton";
import ProjectForm from "@/components/ProjectForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectById } from "@/lib/project-service";

export async function generateMetadata({ params }) {
  const project = await getProjectById(params.id);

  return {
    title: project ? `Edit ${project.title}` : "Edit Project",
  };
}

export default async function EditProjectPage({ params }) {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Edit</p>
            <CardTitle className="mt-2">{project.title}</CardTitle>
          </div>
          <DeleteProjectButton projectId={project._id} />
        </CardHeader>
        <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
          Update the project narrative, refresh media, or change its featured status.
        </CardContent>
      </Card>
      <ProjectForm mode="edit" project={project} />
    </div>
  );
}
