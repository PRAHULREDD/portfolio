import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, Award, Calendar, CheckCircle2 } from 'lucide-react';

export interface CertificateData {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  previewUrl: string;
  pdfUrl: string;
  verifyUrl?: string;
  achievement?: string;
  role?: string;
  description?: string;
  tech?: string[];
}

interface CertificateCardProps {
  cert: CertificateData;
  onView: (cert: CertificateData) => void;
}

export function CertificateCard({ cert, onView }: CertificateCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#1E293B] rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* Thumbnail Container */}
      <div 
        onClick={() => onView(cert)}
        className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer group-hover:after:opacity-100 after:absolute after:inset-0 after:bg-primary/5 after:opacity-0 after:transition-opacity duration-300"
      >
        {/* Verification Badge overlay */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#0F172A]/80 backdrop-blur-md border border-primary/30 px-2.5 py-1 rounded-full shadow-lg">
          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
          <span className="text-[9px] font-bold text-primary uppercase tracking-wider font-mono">Verified Credential</span>
        </div>

        {/* Lazy loaded thumbnail */}
        <img
          src={cert.previewUrl}
          alt={`Preview of ${cert.title}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100 filter-none' : 'opacity-0 blur-sm'
          }`}
        />
        
        {/* Overlay hover effect */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-primary text-black px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest font-headline shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
            Quick View
          </span>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-primary shrink-0" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              {cert.issuer}
            </span>
          </div>

          <h3 className="text-base font-bold text-white font-headline leading-snug group-hover:text-primary transition-colors mb-2">
            {cert.title}
          </h3>

          {cert.achievement && (
            <p className="text-xs text-primary font-semibold font-mono mb-2">
              🏆 {cert.achievement}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 font-body mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{cert.date}</span>
            </div>
            {cert.credentialId && (
              <div className="font-mono text-[10px] bg-slate-900/50 border border-white/5 px-2 py-0.5 rounded text-slate-400 truncate max-w-full">
                ID: {cert.credentialId}
              </div>
            )}
          </div>
        </div>

        {/* Buttons Action Row */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5">
          <button
            onClick={() => onView(cert)}
            className="w-full text-center border border-white/10 hover:border-primary hover:text-primary text-white py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all bg-slate-800/40"
            aria-label={`View ${cert.title}`}
          >
            View
          </button>
          
          <a
            href={cert.pdfUrl}
            download
            className="w-full text-center bg-primary/10 hover:bg-primary hover:text-black text-primary py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            aria-label={`Download PDF for ${cert.title}`}
          >
            <Download className="w-3.5 h-3.5" /> PDF
          </a>

          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 text-center border border-primary/20 hover:border-primary/60 text-primary py-2 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 mt-1 bg-primary/5 hover:bg-primary/10"
              aria-label={`Verify credential for ${cert.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Verify Certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface CertificateModalProps {
  cert: CertificateData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ cert, isOpen, onClose }: CertificateModalProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & Focus trapping
  useEffect(() => {
    if (!isOpen) return;

    // Reset zoom and pan on open
    setZoom(1);
    setPan({ x: 0, y: 0 });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Focus trapping
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"]'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    // Disable background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => {
    setZoom(prev => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 }); // reset pan if Zoom is 1
      return next;
    });
  };
  const handleZoomReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  if (!cert) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-4 md:inset-10 max-w-5xl mx-auto bg-[#0F172A] border border-white/10 shadow-[0_0_80px_rgba(34,197,94,0.2)] flex flex-col rounded-2xl overflow-hidden mt-16 md:mt-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <h3 id="modal-title" className="text-white font-headline font-bold text-xs md:text-sm tracking-wide truncate max-w-[200px] sm:max-w-md md:max-w-lg">
                  {cert.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cert.pdfUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all rounded font-bold text-[10px] uppercase tracking-widest font-mono"
                  aria-label="Download certificate PDF"
                >
                  <Download className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-all cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewer Workspace */}
            <div className="flex-1 w-full bg-slate-950 overflow-hidden relative flex items-center justify-center p-2 sm:p-6 select-none">
              {/* Zoom controls float */}
              <div className="absolute bottom-6 z-30 flex items-center gap-1 bg-[#0F172A]/90 border border-white/10 rounded-full px-3 py-1.5 shadow-2xl backdrop-blur-md">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                  title="Zoom Out"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-300 px-2 min-w-[45px] text-center select-none">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                  title="Zoom In"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <button
                  onClick={handleZoomReset}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                  title="Reset Zoom"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image View Area */}
              <div 
                className="w-full h-full flex items-center justify-center overflow-hidden"
                style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              >
                <motion.div
                  drag={zoom > 1}
                  dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
                  dragElastic={0.05}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => setIsDragging(false)}
                  animate={zoom === 1 ? { x: 0, y: 0 } : undefined}
                  className="max-w-full max-h-full flex items-center justify-center"
                >
                  <motion.img
                    src={cert.previewUrl}
                    alt={cert.title}
                    draggable={false}
                    animate={{ scale: zoom }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="max-w-[95vw] max-h-[70vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/5"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Details Footer bar */}
            {(cert.description || cert.verifyUrl || cert.tech) && (
              <div className="px-6 py-4 bg-slate-900/40 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
                <div className="flex-1">
                  {cert.description && (
                    <p className="text-slate-400 font-body leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  )}
                  {cert.tech && cert.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.tech.map(t => (
                        <span key={t} className="text-[9px] font-mono text-slate-500 uppercase bg-slate-900 px-1.5 py-0.5 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1.5 text-primary border border-primary/20 hover:border-primary/60 px-3 py-1.5 rounded bg-primary/5 hover:bg-primary/10 transition-all font-bold font-mono tracking-wider text-[10px] uppercase"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
