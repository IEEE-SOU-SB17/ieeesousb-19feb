import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { journeyItems, type JourneyItem } from "@/data/journeyData";

const PRO_GRADIENTS = [
  "linear-gradient(145deg, #0B192C 0%, #1A365D 50%, #0f2027 100%)",
  "linear-gradient(145deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
  "linear-gradient(145deg, #111827 0%, #1F2937 50%, #134E5E 100%)",
  "linear-gradient(145deg, #2D1A29 0%, #1A1A24 50%, #1E1B4B 100%)",
  "linear-gradient(145deg, #0F0C29 0%, #302B63 50%, #121020 100%)",
  "linear-gradient(145deg, #06170E 0%, #1A2F23 50%, #091712 100%)",
  "linear-gradient(145deg, #091a2f 0%, #05263d 50%, #033c47 100%)",
  "linear-gradient(145deg, #2c1e16 0%, #1a1514 50%, #12100f 100%)",
  "linear-gradient(145deg, #0B1D3A 0%, #08304B 50%, #041B2E 100%)",
];

export default function JourneyDetails() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<JourneyItem | null | undefined>(undefined);
  const [itemIndex, setItemIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Slideshow state
  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const found = journeyItems.find((j) => j.id === id);
    const idx = journeyItems.findIndex((j) => j.id === id);
    setItem(found ?? null);
    setItemIndex(idx >= 0 ? idx : 0);
    setSlideIndex(0);
    setFade(true);
    setVisible(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, [id]);

  const slides = item
    ? [
        { imageUrl: item.imageUrl, caption: item.title, description: item.details },
        ...(item.gallery ?? []).map((g) => ({
          imageUrl: g.imageUrl,
          caption: g.caption,
          description: g.description,
        })),
      ]
    : [];

  const goTo = (getNext: (prev: number) => number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex((prev) => getNext(prev));
      setFade(true);
    }, 300);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slides.length, id]);

  const handlePrev = () => goTo((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => goTo((prev) => (prev + 1) % slides.length);

  const bg = PRO_GRADIENTS[itemIndex % PRO_GRADIENTS.length];

  if (item === undefined) {
    return (
      <div className="h-screen flex items-center justify-center" style={{ background: PRO_GRADIENTS[0] }}>
        <div className="w-7 h-7 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (item === null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 text-white px-4" style={{ background: PRO_GRADIENTS[0] }}>
        <div className="text-5xl font-black opacity-20">404</div>
        <h1 className="text-xl font-bold">Journey Chapter Not Found</h1>
        <Link to="/about/ieee-sou-sb-journey-loop" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all hover:scale-105">
          <ArrowLeft className="w-4 h-4" /> Back to Our Journey
        </Link>
      </div>
    );
  }

  const currentSlide = slides[slideIndex];

  return (
    <div
      className="h-screen w-screen overflow-hidden text-white flex flex-col relative"
      style={{ background: bg }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none z-0" />

      <div
        className={`relative z-10 flex flex-col h-full max-w-5xl w-full mx-auto px-4 md:px-8 py-4 md:py-6 transition-all duration-600 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* ── TOP: breadcrumb + badge + title ── */}
        <div className="flex-shrink-0 mb-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2 flex-wrap">
            <Link to="/about/ieee-sou-sb-journey-loop" className="hover:text-white transition-colors flex items-center gap-1 group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
              Our Journey
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-gray-300">{item.title}</span>
          </div>

          {/* Badge row */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600/30 border border-blue-500/30 text-blue-300 text-[10px] font-bold tracking-widest uppercase">
              <Calendar className="w-2.5 h-2.5" />
              {item.year}
            </span>
            <span className="text-gray-500 text-[10px] tracking-widest uppercase">
              Chapter {itemIndex + 1} / {journeyItems.length}
            </span>
          </div>

          {/* Title + subtitle */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
            {item.title}
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-light mt-0.5">
            {item.description}
          </p>
        </div>

        {/* ── MIDDLE: image slideshow (flex-grow) ── */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          {/* Slideshow container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl flex-1 min-h-0">
            {/* Image */}
            <div
              className="absolute inset-0"
              style={{ transition: "opacity 0.3s ease", opacity: fade ? 1 : 0 }}
            >
              <img
                key={currentSlide.imageUrl}
                src={currentSlide.imageUrl}
                alt={currentSlide.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* Year watermark on slide 0 */}
              {slideIndex === 0 && (
                <div className="absolute bottom-10 right-5 text-5xl md:text-7xl font-black text-white/10 select-none pointer-events-none leading-none">
                  {item.year}
                </div>
              )}

              {/* Caption */}
              <div className="absolute bottom-8 left-0 right-0 px-4">
                <p className="text-white font-semibold text-sm md:text-base leading-snug drop-shadow">
                  {currentSlide.caption}
                </p>
              </div>

              {/* Slide counter */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full bg-black/50 border border-white/20 text-white text-[10px] font-semibold backdrop-blur-sm">
                  {slideIndex + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Prev / Next arrows */}
            {slides.length > 1 && (
              <>
                <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm z-10" aria-label="Previous">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm z-10" aria-label="Next">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(() => i)}
                    className={`rounded-full transition-all duration-300 ${i === slideIndex ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Description card ── */}
          <div
            className="flex-shrink-0 bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm"
            style={{ transition: "opacity 0.3s ease", opacity: fade ? 1 : 0 }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400 block mb-1">
              {slideIndex === 0 ? "Overview" : `Moment ${slideIndex}`}
            </span>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed line-clamp-3">
              {currentSlide.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
