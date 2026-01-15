import React, { useState } from 'react';
import { SOCIALS } from '../config/content';
import { Icons } from './Icons';

export default function SocialLinks() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (social) => {
    // Extract the actual value from href
    let valueToCopy = '';
    if (social.id === 'email') {
      valueToCopy = social.href.replace('mailto:', '');
    } else if (social.id === 'phone') {
      valueToCopy = social.href.replace('tel:', '');
    }

    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(social.id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const isCopyable = (id) => id === 'email' || id === 'phone';

  return (
    <div className="flex items-center justify-center gap-3">
      {SOCIALS.map((social) => {
        if (isCopyable(social.id)) {
          return (
            <button
              key={social.id}
              onClick={() => handleCopy(social)}
              className="social-btn has-tooltip relative"
              aria-label={`Copy ${social.label}`}
            >
              <span className={`tooltip ${copied === social.id ? 'copied' : ''}`} style={copied === social.id ? { opacity: 1 } : {}}>
                {copied === social.id ? '✓ Copied!' : `Copy ${social.id === 'email' ? 'Email' : 'Phone'}`}
              </span>
              {Icons[social.icon]}
            </button>
          );
        }

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn has-tooltip relative"
            aria-label={social.label}
          >
            <span className="tooltip">{social.label}</span>
            {Icons[social.icon]}
          </a>
        );
      })}
    </div>
  );
}
