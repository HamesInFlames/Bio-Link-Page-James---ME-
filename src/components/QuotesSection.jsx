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
          <div className="modal-content">
            <div className="sm:hidden">
              <div className="handle" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
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

              <ul className="space-y-5">
                {QUOTES.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xl mt-1">{item.emoji}</span>
                    <div>
                      <p className="text-gray-800 italic">"{item.quote}"</p>
                      <p className="text-gray-400 text-sm mt-1">— {item.author}</p>
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
