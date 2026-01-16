import React, { useState } from 'react';
import { QUOTES } from '../config/content';
import { Icons } from './Icons';

export default function QuotesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="card-btn flex items-center justify-between"
      >
        <span className="text-gray-800">{QUOTES.title}</span>
        <span className="text-gray-400">→</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="modal-backdrop animate-fade-in-soft"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="modal-content quotes-modal">
            <div className="sm:hidden">
              <div className="handle" />
            </div>
            
            {/* Fixed header */}
            <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  {QUOTES.title}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 rounded-lg hover:bg-gray-100 text-gray-400"
                  aria-label="Close"
                >
                  {Icons.x}
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="px-6 pb-6 overflow-y-auto">
              <ul className="space-y-6 pt-4">
                {QUOTES.items.map((item, index) => (
                  <li key={index} className="quote-item">
                    <div className="flex gap-3">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-700 text-[15px] leading-relaxed">
                          "{item.quote}"
                        </p>
                        <p className="text-gray-400 text-sm mt-2">— {item.author}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
