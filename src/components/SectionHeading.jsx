import useReveal from './useReveal.js';

export default function SectionHeading({ title, subtitle }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800 pb-7 mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-muted text-sm max-w-[30ch]">{subtitle}</p>
      )}
    </div>
  );
}
