export default function WhatsAppButton() {
  const phoneNumber = '923053290089';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact LinkNest on WhatsApp"
      className="fixed bottom-6 right-6 z-[1000] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.6 5.98L.04 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.93-5.35 11.93-11.93a11.85 11.85 0 0 0-3.49-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.19 4.59.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden md:block text-sm font-semibold whitespace-nowrap">
        WhatsApp · +92 305 3290089
      </span>
    </a>
  );
}