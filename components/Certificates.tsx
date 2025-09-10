import React, { useState, useRef, useEffect } from 'react';

const certificateImages = [
  '/sertifikalar/omer_faruk_koc2.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-05-27-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-06-05-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-06-06-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-06-26-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09 (3)-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-10-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-17-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22(1)-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22-1.png',
  '/sertifikalar/ÖMER FARUK KOÇ - 2025-07-23-1.png',
];

const Certificates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      // ESC tuşu ile modal kapatma
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
      setPosition({ x: 0, y: 0 });
    }
  }, [modalOpen]);

  const openModal = (src: string) => {
    const idx = certificateImages.indexOf(src);
    setSelectedIdx(idx);
    setZoom(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIdx(null);
    setZoom(1);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!modalOpen) return;
    e.preventDefault();
    let newZoom = zoom + (e.deltaY < 0 ? 0.1 : -0.1);
    newZoom = Math.max(0.2, Math.min(newZoom, 5));
    setZoom(newZoom);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null && selectedIdx > 0) setSelectedIdx(selectedIdx - 1);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null && selectedIdx < certificateImages.length - 1) setSelectedIdx(selectedIdx + 1);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseUp = () => setIsDragging(false);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  // Safari tespiti
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return (
    <section id="certificates" className="px-4 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {certificateImages.map((src, idx) => (
          <div 
            key={src} 
            className={`bg-white/2 border border-white/10 shadow-lg${isSafari ? '' : ' backdrop-blur-sm'} rounded-none overflow-hidden flex items-center justify-center cursor-pointer`} 
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`Certificate ${idx + 1}`}
              className="object-contain w-full h-48 bg-black"
              loading="eager"
              style={{ background: '#222' }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedIdx !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-hidden${isSafari ? '' : ' backdrop-blur-sm'}`}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={closeModal}
          onWheel={e => e.preventDefault()}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
            ref={imgContainerRef}
            onWheel={handleWheel}
            tabIndex={-1}
            style={{ outline: 'none' }}
          >
            {/* Sol ok */}
            {selectedIdx > 0 && (
              <button 
                onClick={showPrev} 
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 transition-all duration-300 hover:text-white/50 z-50" 
                style={{ WebkitBackdropFilter: 'opacity(0.5)', backdropFilter: 'opacity(0.5)' }}
                aria-label="Önceki"
              >
                &#x276E;
              </button>
            )}
            {/* Sağ ok */}
            {selectedIdx < certificateImages.length - 1 && (
              <button 
                onClick={showNext} 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 transition-all duration-300 hover:text-white/50 z-50" 
                style={{ WebkitBackdropFilter: 'opacity(0.5)', backdropFilter: 'opacity(0.5)' }}
                aria-label="Sonraki"
              >
                &#x276F;
              </button>
            )}
            
            <img
              src={certificateImages[selectedIdx]}
              alt="Certificate Large"
              className="object-contain max-h-[70vh] w-[70vw] md:w-[50vw] rounded-lg shadow-2xl cursor-move"
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.15s'
              }}
              draggable={false}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;