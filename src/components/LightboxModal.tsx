import React, { useEffect } from 'react';
import { GalleryPlate } from '../data/legacy';

interface LightboxModalProps {
  plate: GalleryPlate | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ plate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (plate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plate, onClose]);

  if (!plate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center p-space-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-space-md bg-tertiary text-on-tertiary">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">zoom_in</span>
            <span className="font-label-protocol text-label-protocol uppercase tracking-wider text-tertiary-fixed font-bold">
              IABC Archival Record Inspection
            </span>
          </div>
          <button
            type="button"
            className="text-tertiary-fixed hover:text-white transition-colors p-1"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-space-lg flex flex-col md:flex-row gap-space-lg items-center">
          <div className="w-full md:w-2/3 h-80 bg-surface-container rounded-lg overflow-hidden relative shadow-inner">
            <img
              id="lightbox-img"
              className="w-full h-full object-cover"
              alt={plate.imageAlt}
              src={plate.imageUrl}
            />
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-between h-full">
            <div>
              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-protocol text-label-protocol px-2 py-0.5 rounded font-bold uppercase">
                Archival Reference Plate • {plate.year}
              </span>
              <h4 id="lightbox-title" className="font-headline-sm text-headline-sm font-serif text-primary mt-2">
                {plate.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {plate.description}
              </p>
            </div>

            <div className="pt-space-md border-t border-outline/20 mt-space-md flex flex-col gap-1 font-label-protocol text-label-protocol text-on-surface-variant">
              <span>REPOSITORY: BRACU-IABC-HERITAGE</span>
              <span>RIGHTS: EDUCATIONAL ACCESS ONLY</span>
              <span className="text-secondary font-semibold">ARCHIVAL CONCEPT PREVIEW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
