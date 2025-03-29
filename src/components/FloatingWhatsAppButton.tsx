
import { MessageSquare } from "lucide-react";

const FloatingWhatsAppButton = () => {
  return (
    <button 
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center"
      onClick={() => window.open('https://wa.me/255123456789', '_blank')}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} />
    </button>
  );
};

export default FloatingWhatsAppButton;
