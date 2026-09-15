import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [big, setBig] = useState(false);
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    setEnabled(mq.matches);
    if (!mq.matches) return;

    document.body.classList.add('has-custom-cursor');

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);

    const attachHandlers = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setBig(true);
          setLabel(el.dataset.cursor || '');
        });
        el.addEventListener('mouseleave', () => {
          setBig(false);
          setLabel('');
        });
      });
    };
    // slight delay so route content has mounted
    const t = setTimeout(attachHandlers, 300);
    const mo = new MutationObserver(attachHandlers);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('has-custom-cursor');
      clearTimeout(t);
      mo.disconnect();
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[999] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background] duration-200 mix-blend-difference ${
        big ? 'w-22 h-22 bg-white' : 'w-4 h-4 bg-orange'
      }`}
      style={{ width: big ? 88 : 16, height: big ? 88 : 16 }}
    >
      <span
        className={`font-display font-semibold text-[0.7rem] text-black tracking-wide transition-opacity ${
          big ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
