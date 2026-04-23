import { redirect } from "next/navigation";

/** Needed so prerender/bundler always resolves this route (redirect runs at request time). */
export const dynamic = "force-dynamic";

/** Academy is no longer promoted on this site; send visitors home. */
export default function AcademyPage() {
  redirect("/");
}
