import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dithanimba,%20I%20would%20like%20a%20quote%20for%20my%20scrap%20metal.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
    </a>
  );
};

export default WhatsAppFloat;