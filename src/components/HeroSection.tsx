
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-coolex-blue/80 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Premium Japanese Cars & Appliances, Delivered to You
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Coolex Links Limited connects you with top-quality vehicles and home appliances from Japan to Tanzania.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-lg flex items-center space-x-2"
            onClick={() => window.open('https://whatsapp.com/group/link', '_blank')}
          >
            <MessageSquare size={20} />
            <span>Join Our WhatsApp Group</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
