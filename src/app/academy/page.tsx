import { redirect } from 'next/navigation';

/** Academy is no longer promoted on this site; send visitors home. */
export default function AcademyPage() {
  redirect('/');
}
