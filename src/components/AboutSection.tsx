
import { MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-coolex-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-coolex-blue mb-10">About Coolex Links Limited</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 mb-6">
                Coolex Links Limited is your trusted bridge between Japan and Tanzania for premium quality vehicles and household appliances. With offices in both countries, we ensure direct sourcing, quality assurance, and competitive pricing.
              </p>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-coolex-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-coolex-blue">Tanzania Office</h3>
                  <p className="text-gray-700">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-coolex-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-coolex-blue">Japan Office</h3>
                  <p className="text-gray-700">Tokyo, Japan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-coolex-blue mb-3">Our Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-coolex-accent rounded-full mr-2"></div>
                  <span className="text-gray-700">Direct sourcing from trusted Japanese suppliers</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-coolex-accent rounded-full mr-2"></div>
                  <span className="text-gray-700">Thorough quality inspection before shipping</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-coolex-accent rounded-full mr-2"></div>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-coolex-accent rounded-full mr-2"></div>
                  <span className="text-gray-700">Professional after-sales support</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-coolex-accent rounded-full mr-2"></div>
                  <span className="text-gray-700">Fast and reliable shipping to Tanzania</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
