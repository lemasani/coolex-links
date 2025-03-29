
import { ShieldCheck, Globe, Truck, DollarSign } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <ShieldCheck size={40} className="text-coolex-accent" />,
    title: "Trust & Quality",
    description: "Direct sourcing from Japan ensures authentic, top-quality products that meet international standards."
  },
  {
    id: 2,
    icon: <Globe size={40} className="text-coolex-accent" />,
    title: "International Presence",
    description: "With offices in both Japan and Tanzania, we manage the entire process from sourcing to delivery."
  },
  {
    id: 3,
    icon: <Truck size={40} className="text-coolex-accent" />,
    title: "Fast Shipping",
    description: "Efficient logistics network ensures your vehicles and appliances arrive quickly and safely."
  },
  {
    id: 4,
    icon: <DollarSign size={40} className="text-coolex-accent" />,
    title: "Competitive Prices",
    description: "Direct relationships with manufacturers allow us to offer better prices without compromising quality."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-coolex-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm hover:bg-opacity-15 transition-all">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-center text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
