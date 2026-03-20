import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { GoogleUser } from '@/types';

export function GoogleUserProfile({ userProfile, children }: { userProfile: GoogleUser; children?: React.ReactNode }) {
  return (
    <Link
      href={userProfile.authorUrl}
      className="focus-visible:ring-yellow flex items-center gap-2.5 focus-visible:ring-2"
    >
      <Image
        className="h-12 w-12 rounded-full bg-neutral-300"
        width={48}
        height={48}
        src={userProfile.authorPhoto}
        alt={userProfile.author}
      />
      <div className="text-heading font-medium">
        <div className="text-left">{userProfile.author}</div>
        {children}
      </div>
    </Link>
  );
}
