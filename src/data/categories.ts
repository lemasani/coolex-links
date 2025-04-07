import { Car, Refrigerator, Tv2, WashingMachine, Smartphone, Laptop, Fan } from "lucide-react";

export const categories = [
  {
    id: "cars",
    name: "Cars",
    description: "Premium selection of imported vehicles from Japan, Dubai and Europe. Sedans, SUVs, trucks and more to match your needs.",
    icon: Car,
    imageUrl: "/images/categories/cars.jpg", // ACTION REQUIRED: Add category images
    badgeText: "Popular"
  },
  {
    id: "refrigerators",
    name: "Refrigerators",
    description: "Energy-efficient refrigerators and freezers from top brands. Single door, double door, and multi-door options available.",
    icon: Refrigerator,
    imageUrl: "/images/categories/refrigerators.jpg"
  },
  {
    id: "tvs",
    name: "Televisions",
    description: "Smart TVs, LED, OLED, and 4K displays from leading manufacturers. Various sizes to suit any room.",
    icon: Tv2,
    imageUrl: "/images/categories/tvs.jpg"
  },
  {
    id: "washing-machines",
    name: "Washing Machines",
    description: "Automatic, semi-automatic, front-loading and top-loading washing machines for efficient laundry care.",
    icon: WashingMachine,
    imageUrl: "/images/categories/washing-machines.jpg" 
  },
  {
    id: "smartphones",
    name: "Smartphones",
    description: "Latest models of smartphones with advanced features, competitive pricing and warranty coverage.",
    icon: Smartphone,
    imageUrl: "/images/categories/smartphones.jpg"
  },
  {
    id: "laptops",
    name: "Laptops & Computers",
    description: "Business laptops, gaming systems, and all-in-one computers from trusted brands with after-sales support.",
    icon: Laptop,
    imageUrl: "/images/categories/laptops.jpg"
  },
  {
    id: "air-conditioners",
    name: "Air Conditioners",
    description: "Split and window air conditioners designed for Tanzania's climate. Energy-efficient cooling solutions.",
    icon: Fan,
    imageUrl: "/images/categories/air-conditioners.jpg",
    badgeText: "New Arrivals"
  }
];
