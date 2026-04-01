import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // timers/flags in refs (렌더와 무관한 값)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const footerElRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    footerElRef.current = document.querySelector("footer");

    const checkScrollable = () => {
      const scrollable =
        document.documentElement.scrollHeight > window.innerHeight + 1; // +1로 경계값 깜빡임 방지
      setIsVisible(scrollable);
    };

    // footer 감지는 IntersectionObserver로 (스크롤마다 rect 계산 X)
    if (footerElRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.01,
        }
      );
      observerRef.current.observe(footerElRef.current);
    } else {
      // footer가 없는 페이지면 false 고정
      setIsFooterVisible(false);
    }

    const handleScroll = () => {
      // 스크롤 중 상태 표시 (중복 set 방지)
      setIsScrolling(true);

      // 스크롤 멈춤 감지 타이머 갱신
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);

      // scroll/resize 계산은 rAF로 1프레임에 1번만
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        checkScrollable();
      });
    };

    const handleResize = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        checkScrollable();
      });
    };

    // 초기 상태 계산
    checkScrollable();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleClick = () => {
    if (isFooterVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && !isScrolling && (
        <motion.button
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleClick}
          className="cursor-pointer fixed bottom-10 left-1/2 -translate-x-1/2 z-10 w-15 h-15 rounded-full bg-rose-500 hover:bg-rose-400 text-white shadow-[0_8px_12px_rgba(0,0,0,0.2)] hover:shadow-[0 12px_24px_rgba(0,0,0,9)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
          aria-label={isFooterVisible ? "Scroll to top" : "Scroll down"}
        >
          {isFooterVisible ? (
            <div className="relative w-8 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 36"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline
                  points="6,20 12,14 18,20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    values="0,6; 0,-6; 0,6"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </polyline>
              </svg>
            </div>
          ) : (
            <div className="relative w-8 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 36"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="22" rx="7" ry="7" />
                <circle cx="12" cy="12" r="2" fill="currentColor">
                  <animate
                    attributeName="cy"
                    values="8;14;8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <polyline
                  points="9,31 12,34 15,31"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </polyline>
              </svg>
            </div>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}