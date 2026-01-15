import React from 'react';
import { SOCIALS } from '../config/content';
import { Icons } from './Icons';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      {SOCIALS.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target={social.id !== 'email' && social.id !== 'phone' ? '_blank' : undefined}
          rel={social.id !== 'email' && social.id !== 'phone' ? 'noopener noreferrer' : undefined}
          className="social-btn has-tooltip relative"
          aria-label={social.label}
        >
          <span className="tooltip">{social.label}</span>
          {Icons[social.icon]}
        </a>
      ))}
    </div>
  );
}
