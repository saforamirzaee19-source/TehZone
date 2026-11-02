import "./App.css";
import Sidbar from "./components/Sidbar.jsx";
import Header from "./components/Header.jsx";
import Gallary from "./components/Gallary.jsx";
import kayboard from "./assets/images/kayboard.jpg";
import mouse from "./assets/images/mouse.jpg";
import headphone from "./assets/images/headphone.jpg";
import controller from "./assets/images/game.jpg";

function App() {
  // Header Codes
  const headerIcons = [
    {
      id: 1,
      notification: "https://cdn.lordicon.com/lznlxwtc.json",
      message: "https://cdn.lordicon.com/hpivxauj.json",
      cart: "https://cdn.lordicon.com/uisoczqi.json",
    },
  ];

  // Gallary codes

  const gallaryCards = [
    {
      id: 1,
      image: kayboard,
      name: "Keyboard x401k",
      category: "Electronics",
      price: 105,
    },
    {
      id: 2,
      image: mouse,
      name: "Ultra-Light Gaming Mouse",
      category: "Electronics",
      price: 32,
    },

    {
      id: 3,
      image: headphone,
      name: "Wireless-Ear Headphones",
      category: "Electronics",
      price: 45,
    },

    {
      id: 4,
      image: controller,
      name: "Multi-Platform Game Controller",
      category: "Premium Coiled Cable",
      price: 63,
    },

    {
      id: 5,
      image:
        "https://images.pexels.com/photos/31406900/pexels-photo-31406900.jpeg",
      name: "Apple Watch Series 7",
      category: "Fashon & Accessories",
      price: 50,
    },

    {
      id: 6,
      image:
        "https://images.pexels.com/photos/16435177/pexels-photo-16435177.jpeg",
      name: "Productive Travel Case",
      category: "Fashon & Accessories",
      price: 50,
    },
  ];

  return (
    <>
      {headerIcons.map((icon) => (
        <Header key={icon.id} {...icon} />
      ))}
      <Sidbar />

      <div className="gallary-title">
        <h1>Products ---</h1>
        <p>View All Products</p>

        {gallaryCards.map((products) => (
          <Gallary key={products.id} {...products} />
        ))}
      </div>
    </>
  );
}

export default App;
