import React from 'react';
import { INTERESTS } from '../config/content';

export default function InterestsSection() {
  return (
    <div className="card">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {INTERESTS.title}
      </h3>
      
      <ul className="space-y-3 stagger">
        {INTERESTS.items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-xl">{item.emoji}</span>
            <div>
              <span className="text-gray-800">{item.label}</span>
              <span className="text-gray-400"> — {item.note}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 pt-4 border-t border-gray-100 text-sm text-gray-500">
        {INTERESTS.footer}
      </p>
    </div>
  );
}
