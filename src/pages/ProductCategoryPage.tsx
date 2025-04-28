import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

// Sample product data - you would replace this with actual API calls or data
const sampleProducts = {
  cars: [
    {
      id: 1,
      name: "Toyota Corolla",
      image:
        "https://images.unsplash.com/photo-1626072557464-90403d788e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95b3RhJTIwY29yb2xsYXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Reliable sedan with great fuel economy",
    },
    {
      id: 2,
      name: "Honda CR-V",
      image:
        "https://images.unsplash.com/photo-1634512974147-2ffeec9bf892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9uZGElMjBDUiUyMFZ8ZW58MHx8MHx8fDA%3D",
      description: "Spacious SUV with advanced safety features",
    },
    {
      id: 3,
      name: "Mazda CX-5",
      image:
        "https://images.unsplash.com/photo-1743114713466-f12a85992a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWF6ZGElMjBDWCUyMDV8ZW58MHx8MHx8fDA%3D",
      description: "Stylish crossover with powerful performance",
    },
  ],
  bicycles: [
    {
      id: 1,
      name: "Mountain Bike Pro",
      image:
        "https://images.unsplash.com/photo-1560557336-7f28872591de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vdW50YWluJTIwQmlrZSUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Durable bike for off-road adventures",
    },
    {
      id: 2,
      name: "City Cruiser",
      image:
        "https://images.unsplash.com/photo-1661127402231-29bd0a050541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHklMjBjcnVpc2VyJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Comfortable bike for urban commuting",
    },
    {
      id: 3,
      name: "Kids BMX",
      image:
        "https://images.unsplash.com/photo-1627403516444-da5d6efa7a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJNWHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Fun and safe bike for children",
    },
  ],
  "home-equipment": [
    {
      id: 1,
      name: "Professional Cookware Set",
      image: "/images/products/cookware.jpg",
      description: "Complete set of premium cookware",
    },
    {
      id: 2,
      name: "Smart Rice Cooker",
      image: "/images/products/ricecooker.jpg",
      description: "Intelligent cooking with multiple functions",
    },
    {
      id: 3,
      name: "Kitchen Knife Set",
      image: "/images/products/knives.jpg",
      description: "Sharp and durable kitchen knives",
    },
  ],
};

const ProductCategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  // WHATSAPP_NUMBER should be configured in environment variables
  const WHATSAPP_NUMBER = "255757909821";

  useEffect(() => {
    if (categoryId) {
      // Find the category data
      const categoryData = categories.find((cat) => cat.id === categoryId);
      setCategory(categoryData);

      // Load products for this category
      // In a real app, you might fetch these from an API
      setProducts(sampleProducts[categoryId] || []);
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">Category not found</div>
    );
  }

  const handleInquiry = (productName) => {
    const message = encodeURIComponent(
      `Hello Coolex-Links! I'm interested in the ${productName} from your ${category.name} category.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28 flex-grow">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-coolex-blue">
          {category.name}
        </h1>
        <div className="w-20 h-1 bg-coolex-accent mt-4 mb-6"></div>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {product.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 text-coolex-blue">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button
                  onClick={() => handleInquiry(product.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Inquire About This Product
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No products found in this category.
          </p>
          <Button
            onClick={() => {
              const message = encodeURIComponent(
                `Hello Coolex-Links! I'm interested in your ${category.name} products and would like to know more.`
              );
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
                "_blank"
              );
            }}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageSquare size={18} className="mr-2" />
            Ask About {category.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCategoryPage;
