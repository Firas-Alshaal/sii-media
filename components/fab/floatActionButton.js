import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFAB() {
  const phoneNumber = "+971545615757";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl md:text-3xl flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFAB;
