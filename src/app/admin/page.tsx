import { JobListItem } from "@/components/JobListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });
  return (
    <main className="max-w-5x1 m-auto my-10 space-y-10 px-3">
      <H1 className="text-center">Admin Dashboard</H1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs:</h2>
        {unapprovedJobs.map((job, i) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
      </section>
    </main>
  );
}
