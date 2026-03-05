export default function WhatsAppFloatingButton() {
    return (
        <a
            href="https://wa.me/9664172827"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-floating-btn"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-400/40 group"
            style={{ background: '#25D366' }}
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            {/* WhatsApp SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-7 h-7 fill-white"
            >
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.478-2.003A15.935 15.935 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.286 13.286 0 01-6.78-1.857l-.486-.29-5.032 1.188 1.22-4.903-.317-.503A13.302 13.302 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zM23.4 19.6c-.373-.187-2.208-1.09-2.55-1.213-.342-.123-.592-.187-.84.187-.25.373-.966 1.213-1.184 1.463-.218.25-.435.28-.808.094-.373-.187-1.574-.58-2.998-1.852-1.108-.99-1.855-2.213-2.073-2.587-.218-.373-.023-.574.164-.76.168-.167.373-.435.56-.652.187-.218.25-.373.373-.622.125-.25.063-.468-.031-.655-.094-.187-.84-2.025-1.152-2.773-.303-.727-.61-.629-.84-.64-.218-.01-.468-.012-.718-.012s-.655.094-.998.468c-.343.373-1.309 1.28-1.309 3.121 0 1.841 1.34 3.62 1.527 3.869.187.25 2.636 4.028 6.39 5.648.894.386 1.591.617 2.134.79.896.286 1.712.245 2.357.149.719-.107 2.208-.903 2.52-1.776.312-.873.312-1.62.218-1.776-.094-.156-.343-.25-.716-.437z" />
            </svg>
            {/* Pulse ring */}
            <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ background: '#25D366' }}
            />
            {/* Tooltip */}
            <span
                className="absolute right-16 bg-white text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
                style={{ bottom: '50%', transform: 'translateY(50%)' }}
            >
                Chat on WhatsApp
            </span>
        </a>
    )
}
