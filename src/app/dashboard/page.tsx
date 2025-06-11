import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

import SignOutButton from './components/sign-out-button';

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/authentication');
  }
  return (
    <>
      <div>Dashboard</div>
      <p>Welcome {session?.user.name}!</p>
      <p>E-mail: {session?.user.email}</p>
      <SignOutButton />
    </>
  );
}
