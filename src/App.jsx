import "./App.css";
import Sidbar from "./components/Sidbar.jsx";
import Header from "./components/Header.jsx";

function App() {
  const headerIcons = [
    {
      id: 1,
      notification: "https://cdn.lordicon.com/lznlxwtc.json",
      message: "https://cdn.lordicon.com/hpivxauj.json",
      cart: "https://cdn.lordicon.com/uisoczqi.json",
    },
  ];

  return (
    <>
      {headerIcons.map((icon) => (
        <Header key={icon.id} {...icon} />
      ))}
      <Sidbar />
    </>
  );
}

export default App;
