
import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-coolex-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-coolex-blue mb-12">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-coolex-blue mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-coolex-accent mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">Tanzania: +255 123 456 789</p>
                  <p className="text-gray-600">Japan: +81 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-coolex-accent mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">info@coolexlinks.com</p>
                  <p className="text-gray-600">sales@coolexlinks.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-600 p-8 rounded-lg shadow-md text-white">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Join Our WhatsApp Group</h3>
            <p className="text-center mb-6">
              Get instant updates about new arrivals, special offers, and ask any questions directly to our team.
            </p>
            <div className="flex justify-center">
              <button 
                className="bg-white text-green-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                onClick={() => window.open('https://whatsapp.com/group/link', '_blank')}
              >
                <MessageSquare size={20} />
                <span>Join WhatsApp Group</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
