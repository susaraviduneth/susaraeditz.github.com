import { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Colombo City Branding",
    category: "branding",
    imageUrl: "https://images.pexels.com/photos/5611078/pexels-photo-5611078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete brand identity for Colombo's urban development project"
  },
  {
    id: 2,
    title: "Ceylon Tea Packaging",
    category: "packaging",
    imageUrl: "https://images.pexels.com/photos/1162455/pexels-photo-1162455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Modern packaging design for premium Ceylon tea products"
  },
  {
    id: 3,
    title: "Kandy Festival Poster",
    category: "print",
    imageUrl: "https://images.pexels.com/photos/6457497/pexels-photo-6457497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Vibrant poster design for annual Kandy cultural festival"
  },
  {
    id: 4,
    title: "Sri Lankan Resort Website",
    category: "web",
    imageUrl: "https://images.pexels.com/photos/4352244/pexels-photo-4352244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Responsive website design for luxury beach resort in southern Sri Lanka"
  },
  {
    id: 5,
    title: "Ayurveda Product Line",
    category: "branding",
    imageUrl: "https://images.pexels.com/photos/6693648/pexels-photo-6693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete branding for traditional ayurvedic wellness products"
  },
  {
    id: 6,
    title: "Colombo Fashion Week",
    category: "print",
    imageUrl: "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Event materials for Sri Lanka's premier fashion showcase"
  }
];

export const categories = [
  { id: "all", name: "All Works" },
  { id: "branding", name: "Branding" },
  { id: "packaging", name: "Packaging" },
  { id: "print", name: "Print" },
  { id: "web", name: "Web Design" }
];