"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <h2 className="text-xl font-bold text-gray-800">My Resume</h2>
          <div className="flex items-center gap-3">
             <a 
              href={resumeUrl} 
              download
              className="px-4 py-2 bg-red-900 text-white text-sm font-medium rounded-lg hover:bg-red-800 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-red-900 hover:bg-red-50 rounded-full transition-colors flex items-center justify-center"
              style={{ color: '#670000', border: '1px solid rgba(103, 0, 0, 0.2)' }}
              aria-label="Close modal"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-50 p-0 overflow-hidden relative">
          <iframe 
            src={`${resumeUrl}#view=FitH`} 
            className="w-full h-full border-0"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
