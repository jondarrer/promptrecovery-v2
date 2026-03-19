import React from 'react';
import Link from 'next/link';

import { GoogleUser } from '@/types';

export function GoogleUserProfile({ userProfile, children }: { userProfile: GoogleUser; children?: React.ReactNode }) {
  return (
    <Link
      href={userProfile.authorUrl}
      className="flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-yellow"
    >
      <img className="w-12 h-12 rounded-full bg-neutral-300" src={userProfile.authorPhoto} alt={userProfile.author} />
      <div className="font-medium text-heading">
        <div className="text-left">{userProfile.author}</div>
        {children}
      </div>
    </Link>
  );
}
