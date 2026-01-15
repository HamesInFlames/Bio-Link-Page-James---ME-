import React, { useState } from 'react';
import { INTERESTS } from '../config/content';
import { Icons } from './Icons';

export default function InterestsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="card-btn flex items-center justify-between"
      >
        <span className="text-gray-800">{INTERESTS.title}</span>
        <span className="text-gray-400">→</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="modal-backdrop animate-fade-in-soft"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="modal-content">
            <div className="sm:hidden">
              <div className="handle" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {INTERESTS.title}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 rounded-lg hover:bg-gray-100 text-gray-400"
                  aria-label="Close"
                >
                  {Icons.x}
                </button>
              </div>

              <ul className="space-y-3">
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
          </div>
        </div>
      )}
    </>
  );
}
