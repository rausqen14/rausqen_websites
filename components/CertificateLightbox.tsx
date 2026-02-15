import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Certificate {
    name: string;
    url: string;
    issuer?: string;
    date?: string;
    image?: string;
}

interface CertificateLightboxProps {
    certificates: Certificate[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
    certificates,
    initialIndex,
    isOpen,
    onClose,
}) => {
    const { t } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const lastMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    }, [currentIndex, isOpen]);

    const scrollPosition = useRef(0);

    useEffect(() => {
        if (isOpen) {
            // Save current scroll position before opening
            scrollPosition.current = window.scrollY;
        }
    }, [isOpen]);

    const handleClose = () => {
        // Restore scroll position when closing
        window.scrollTo(0, scrollPosition.current);
        onClose();
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const delta = -e.deltaY * 0.002;
        const newZoom = Math.min(Math.max(1, zoom + delta), 4);
        const ratio = newZoom / zoom;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const newPan = {
            x: x * (1 - ratio) + pan.x * ratio,
            y: y * (1 - ratio) + pan.y * ratio
        };
        setZoom(newZoom);
        setPan(newZoom === 1 ? { x: 0, y: 0 } : newPan);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom > 1) {
            e.preventDefault();
            setIsDragging(true);
            lastMousePos.current = { x: e.clientX, y: e.clientY };
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            lastMousePos.current = { x: e.clientX, y: e.clientY };
            setPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
        };
        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
            else if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
            else if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % certificates.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, certificates.length]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-hidden"
                    onClick={handleClose}
                >
                    {/* Header Actions */}
                    <button
                        onClick={(e) => { e.stopPropagation(); handleClose(); }}
                        className="absolute z-[110] top-6 right-6 p-2 text-white hover:opacity-80 transition-opacity"
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length); }}
                        className="absolute left-4 sm:left-8 z-[110] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md hidden sm:block"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % certificates.length); }}
                        className="absolute right-4 sm:right-8 z-[110] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md hidden sm:block"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Main Image Container */}
                    <div
                        className="w-full h-full flex items-center justify-center p-4 sm:p-20"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                    >
                        <img
                            src={certificates[currentIndex].image}
                            alt={certificates[currentIndex].nameKey ? (t.certificates.names as any)[certificates[currentIndex].nameKey!] : certificates[currentIndex].name}
                            className="max-w-full max-h-full object-contain transition-transform duration-75 ease-linear will-change-transform"
                            style={{
                                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                            }}
                            draggable={false}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Certificate Info Overlay */}
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[110] text-center w-full px-4">
                        <h3 className="text-white text-xl font-bold">
                            {certificates[currentIndex].nameKey ? (t.certificates.names as any)[certificates[currentIndex].nameKey!] : certificates[currentIndex].name}
                        </h3>
                        <p className="text-neutral-400 text-sm">
                            {certificates[currentIndex].issuer} • {certificates[currentIndex].date}
                        </p>
                        {certificates[currentIndex].url.endsWith('.pdf') && (
                            <a
                                href={certificates[currentIndex].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-4 flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md border border-white/10 text-sm font-medium"
                            >
                                <ExternalLink size={16} />
                                {t.certificates.view}
                            </a>
                        )}
                    </div>

                    {/* Footer Info / Counter */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-[110]">
                        <div className="bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/10">
                            {currentIndex + 1} / {certificates.length}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
