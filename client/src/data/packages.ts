import lakeParadise from "@assets/generated_images/aerial_view_of_lake_paradise_marsabit.png";
import chalbiDesert from "@assets/generated_images/chalbi_desert_land_cruiser_adventure.png";
import rendilleCulture from "@assets/generated_images/traditional_rendille_cultural_portrait.png";
import camelTrek from "@assets/generated_images/camel_trekking_in_ngurunit_mountains.png";

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: "marsabit-forest",
    title: "Marsabit Forest & Lake Exploration",
    duration: "3 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: lakeParadise,
    description: "Discover the enchanting Marsabit forest and the picturesque Lake Paradise. Immerse yourself in birdwatching and cultural experiences.",
    highlights: ["Lake Paradise", "Birdwatching Excursion", "Rendille Traditional Meal", "Cultural Experiences"],
  },
  {
    id: "chalbi-desert",
    title: "Chalbi Desert Expedition",
    duration: "5 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: chalbiDesert,
    description: "Heart-pounding challenges and serene nature retreats in the vast Chalbi Desert. Experience the thrill of desert exploration.",
    highlights: ["Desert Exploration", "North Horr Swimming", "Sand Dunes", "Gabra Culture"],
  },
  {
    id: "loyangalani",
    title: "Loiyangalani Exploration",
    duration: "5 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: rendilleCulture,
    description: "Experience the magic of Lake Tours in Loiyangalani, including boat riding and cultural interactions with Turkana and Elmolo communities.",
    highlights: ["Wind Turbines", "Lake Turkana Boat Ride", "Elmolo Culture", "Cultural Experiences"],
  },
  {
    id: "ngurunit-thrills",
    title: "Ngurunit Thrills Package",
    duration: "4 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: camelTrek,
    description: "Adventure awaits in Ngurunit with rock sliding, mountain climbing, and camel riding experiences against stunning backdrops.",
    highlights: ["Rock Sliding", "Mountain Climbing", "Camel Riding", "Cultural Experiences"],
  },
  {
    id: "ultimate-marathon",
    title: "Ultimate Marathon Adventure",
    duration: "7 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: chalbiDesert,
    description: "The complete Marsabit experience combining Lake Paradise, Chalbi Desert, North Horr, and Loiyangalani in one epic journey.",
    highlights: ["Complete Circuit", "Diverse Cultures", "Desert & Forest", "Lake Turkana"],
  },
  {
    id: "merille-blacksmith",
    title: "Merille Blacksmith Experience",
    duration: "1 Day",
    price: "KES 7,000 per day (Self-Transport)",
    image: rendilleCulture,
    description: "Witness the ancient art of traditional ironworking with the blacksmiths of Merille. A unique cultural journey into the heart of Rendille craftsmanship.",
    highlights: ["Traditional Ironworking", "Merille Village Tour", "Rendille Craftsmanship", "Cultural Interaction"],
  },
  {
    id: "samburu-immersion",
    title: "Samburu Cultural Immersion",
    duration: "2 Days",
    price: "KES 7,000 per day (Self-Transport)",
    image: rendilleCulture,
    description: "Experience the vibrant heart of Samburu culture. Join the community in their daily life, witness the spectacular traditional dances, and learn about the deep-rooted nomadic traditions of these resilient warriors.",
    highlights: ["Warrior Singing & Dance", "Traditional Homestead (Manyatta) Visit", "Beadwork Workshop", "Nomadic Lifestyle Experience"],
  },
];
