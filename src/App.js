import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MessageScreen from "./pages/MessageScreen";
import Grey from "./pages/Grey";
import Lilac from "./pages/Lilac";
import LightGreen from "./pages/LightGreen";
import LightBlue from "./pages/LightBlue";
import NeonGreen from "./pages/NeonGreen";
import Red from "./pages/Red";
import White from "./pages/White";
import BgColour from "./pages/BgColour";
import Purple from "./pages/Purple";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/grey":
        title = "";
        metaDescription = "";
        break;
      case "/lilac":
        title = "";
        metaDescription = "";
        break;
      case "/light-green":
        title = "";
        metaDescription = "";
        break;
      case "/light-blue":
        title = "";
        metaDescription = "";
        break;
      case "/neon-green":
        title = "";
        metaDescription = "";
        break;
      case "/red":
        title = "";
        metaDescription = "";
        break;
      case "/white":
        title = "";
        metaDescription = "";
        break;
      case "/bg-colour":
        title = "";
        metaDescription = "";
        break;
      case "/purple":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MessageScreen />} />
      <Route path="/grey" element={<Grey />} />
      <Route path="/lilac" element={<Lilac />} />
      <Route path="/light-green" element={<LightGreen />} />
      <Route path="/light-blue" element={<LightBlue />} />
      <Route path="/neon-green" element={<NeonGreen />} />
      <Route path="/red" element={<Red />} />
      <Route path="/white" element={<White />} />
      <Route path="/bg-colour" element={<BgColour />} />
      <Route path="/purple" element={<Purple />} />
    </Routes>
  );
}
export default App;
