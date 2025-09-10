import React, { useState, useRef, useEffect } from 'react';

const aiNoteImages = [
  '/ai_engineer_süreç/IMG_1177.jpg',
  '/ai_engineer_süreç/IMG_1179.jpg',
  '/ai_engineer_süreç/IMG_1180.jpg',
  '/ai_engineer_süreç/IMG_1181.jpg',
  '/ai_engineer_süreç/IMG_1182.jpg',
  '/ai_engineer_süreç/IMG_1184.jpg',
  '/ai_engineer_süreç/IMG_1185.jpg',
  '/ai_engineer_süreç/IMG_1186.jpg',
  '/ai_engineer_süreç/IMG_1190.jpg',
  '/ai_engineer_süreç/IMG_1191.jpg',
  '/ai_engineer_süreç/IMG_1192.jpg',
  '/ai_engineer_süreç/IMG_1193.jpg',
  '/ai_engineer_süreç/IMG_1194.jpg',
  '/ai_engineer_süreç/IMG_1195.jpg',
  '/ai_engineer_süreç/IMG_1196.jpg',
  '/ai_engineer_süreç/IMG_1197.jpg',
  '/ai_engineer_süreç/IMG_1198.jpg',
  '/ai_engineer_süreç/IMG_1199.jpg',
  '/ai_engineer_süreç/IMG_1200.jpg',
  '/ai_engineer_süreç/IMG_1201.jpg',
  '/ai_engineer_süreç/IMG_1202.jpg',
  '/ai_engineer_süreç/IMG_1203.jpg',
  '/ai_engineer_süreç/IMG_1204.jpg',
];

const AiNotes: React.FC = () => {
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
      // Reset position when modal closes
      setPosition({ x: 0, y: 0 });
    }
  }, [modalOpen]);

  const openModal = (src: string) => {
    const idx = aiNoteImages.indexOf(src);
    setSelectedIdx(idx);
    setZoom(1);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedIdx(null);
    setZoom(1);
  };
  // Mouse wheel ile zoom
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
    if (selectedIdx !== null && selectedIdx < aiNoteImages.length - 1) setSelectedIdx(selectedIdx + 1);
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
    <section id="ai-notes" className="px-4 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {aiNoteImages.map((src, idx) => (
          <div key={src} className={`bg-white/2 border border-white/10 shadow-lg${isSafari ? '' : ' backdrop-blur-sm'} rounded-none overflow-hidden flex items-center justify-center cursor-pointer`} onClick={() => openModal(src)}>
            <img
              src={src}
              alt={`AI Note ${idx + 1}`}
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
            {selectedIdx < aiNoteImages.length - 1 && (
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
              src={aiNoteImages[selectedIdx]}
              alt="AI Note Large"
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

export default AiNotes;
