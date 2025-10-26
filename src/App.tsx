import { useState, useEffect } from "react";
import "./App.css";
import type { Product } from "./interface/product.interface";
import Card from "./components/card";

type ProductProps = {
  thumbnail: string;
  title: string;
  tags: string[];
  description: string;
  price: number;
  brand: string;
  id?: number;
};

const CardAlt = ({ product }: { product: ProductProps }) => {
  const { thumbnail, title, tags, description, price, brand, id } = product;
  return (
    <div key={id} className="w-[300px] p-3 rounded-2xl shadow">
      {/* image */}
      <img
        src={thumbnail}
        alt={brand}
        className="w-full h-52 rounded-2xl object-cover object-top"
      />
      {/* title */}
      <h1 className="mt-1 text-2xl font-bold capitalize text-left text-gray-700">
        {title}
      </h1>
      {/* tags */}
      <div className="flex gap-1">
        {tags.map((tag) => (
          <span
            title={tag}
            className="p-1 border border-gray-400 rounded-2xl text-sm text-gray-400 truncate hover:bg-gray-400 hover:text-white transition-all ease-in-out duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* description */}
      <p className="text-gray-500 text-sm text-left mt-1">{description}</p>
      {/* card footer */}
      <div className="flex justify-between align-center w-full mt-2">
        <h1 className="font-bold text-black ">${price}</h1>
        <button className="rounder bg-amber-500 text-white font-bold rounded-2xl py-1 px-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

function App() {
  // const [products, setProducts] = useState<Product[]>([]);
  const [dummyData, setdummyData] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState<any>(null);

  const dummyProducts: ProductProps[] = [
    {
      thumbnail: "/image.jpg",
      title: "Emeka Poses",
      id: 1,
      description:
        "A Charismatic model known for his efforlessly confident poses and award winning smile. Whether in casual or studio shots, Emeka brings a natural energy that turns even test photos into brand campaigns",
      brand: "web phoenix brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 2,
      title: "Emeka Poses",
      description:
        " The limited edition Emeka Pose Collection featuring premium expressions, balnaced confidence, and iconic legs spread stance that defined a generation of dark skinned elegance",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 3,
      title: "Emeka Poses",
      description:
        " Designed with precision and personality, Emeka embodies minimalism with a touch of chaos the kind of pose that makes you question if it's candid or calculated. Spoiler: it's both",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 4,
      title: "Emeka Poses",
      description:
        "Model, comedian, philosiopher. Emeka doesn't just take photos. he create moments.",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 5,
      title: "Emeka Poses",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas omnis officiis non maxime laboriosam, repellendus accusantium reprehenderit fuga? Exercitationem adipisci recusandae tempora. Sed quos in at veritatis iusto culpa?",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 6,
      title: "Emeka Poses",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas omnis officiis non maxime laboriosam, repellendus accusantium reprehenderit fuga? Exercitationem adipisci recusandae tempora. Sed quos in at veritatis iusto culpa?",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
    {
      thumbnail: "/image.jpg",
      id: 7,
      title: "Emeka Poses",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas omnis officiis non maxime laboriosam, repellendus accusantium reprehenderit fuga? Exercitationem adipisci recusandae tempora. Sed quos in at veritatis iusto culpa?",
      brand: "Webphenix Brand",
      price: 180,
      tags: ["smilling face", "dark skinned", "legs spreaded"],
    },
  ];

  // const fetchProducts = async () => {
  //   try {
  //     const API_URL = "https://dummyjson.com/products/";

  //     const res = await fetch(API_URL);
  //     if (!res.ok) throw new Error("something went wrong pls try again later");
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (error: any) {
  //     seterror(error.message || error);
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchDummyProducts = async () => {
    setTimeout(() => {
      setdummyData(dummyProducts);
      setLoading(false);
      seterror(null);
    }, 3000);
  };

  useEffect(() => {
    // fetchProducts();
    fetchDummyProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-center font-bold text-3xl text-blue-400">loading...</p>
    );
  }

  if (error) {
    return (
      <p className="text-red-400 font-semibold text-3xl text-center mt-5">
        Failed to load products
      </p>
    );
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-blue-500 text-center">
        Pose Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 w-full place-items-center">
        {dummyData.map((product: ProductProps, idx: number) => (
          <CardAlt key={idx} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
