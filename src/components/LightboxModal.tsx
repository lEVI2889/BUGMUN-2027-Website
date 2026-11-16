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
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plate, onClose]);

  if (!plate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 bg-tertiary/95 backdrop-blur-xl flex flex-col p-4 sm:p-gutter justify-between animate-fadeIn"
      onClick={onClose}
    >
      {/* =========================================================================
          MOBILE LIGHTBOX VIEW (Approved Stitch Reference: Full-viewport, pt-safe, pb-safe)
          ========================================================================= */}
      <div
        className="flex flex-col h-full justify-between lg:hidden w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pt-safe">
          <div className="flex flex-col text-on-tertiary">
            <span className="font-label-protocol text-label-protocol text-secondary-container uppercase font-bold tracking-wider">
              Historical Record Inspection
            </span>
            <span id="lightbox-title-mobile" className="font-title-md text-title-md font-bold text-white">
              {plate.title}
            </span>
          </div>
          <button
            type="button"
            id="lightbox-close-mobile"
            className="w-10 h-10 rounded-full bg-surface-container-lowest/10 text-on-tertiary flex items-center justify-center hover:bg-surface-container-lowest/20 transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex items-center justify-center py-space-md">
          <div className="relative w-full aspect-[4/3] max-h-[50vh] bg-tertiary-container rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
            <img
              id="lightbox-img-mobile"
              className="w-full h-full object-contain"
              alt={plate.imageAlt}
              src={plate.imageUrl}
            />
          </div>
        </div>

        {/* Bottom Details Card */}
        <div className="pb-safe flex flex-col gap-space-xs text-on-tertiary bg-tertiary-container p-space-md rounded-xl shadow-lg">
          <div className="flex items-center justify-between text-secondary-container">
            <span id="lightbox-year-mobile" className="font-label-protocol text-label-protocol font-bold">
              EDITION: {plate.year}
            </span>
            <span className="font-label-protocol text-label-protocol tracking-wider uppercase font-semibold">
              IABC ARCHIVAL DEPOSITORY
            </span>
          </div>
          <p id="lightbox-desc-mobile" className="font-body-sm text-body-sm text-on-tertiary-container leading-relaxed">
            {plate.description}
          </p>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP LIGHTBOX VIEW (Approved Desktop Reference: Centered Modal Card)
          ========================================================================= */}
      <div
        className="hidden lg:flex relative max-w-4xl w-full mx-auto my-auto bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl flex-col"
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
        <div className="p-space-lg flex flex-row gap-space-lg items-center">
          <div className="w-2/3 h-80 bg-surface-container rounded-lg overflow-hidden relative shadow-inner">
            <img
              id="lightbox-img"
              className="w-full h-full object-cover"
              alt={plate.imageAlt}
              src={plate.imageUrl}
            />
          </div>

          <div className="w-1/3 flex flex-col justify-between h-full">
            <div>
              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-protocol text-label-protocol px-2 py-0.5 rounded font-bold uppercase">
                Archival Record Plate • {plate.year}
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
              <span>RIGHTS: EDUCATIONAL &amp; HISTORICAL ACCESS</span>
              <span className="text-secondary font-semibold">AUTHENTICATED IABC ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
