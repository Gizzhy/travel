import Aos from "aos";
import { useEffect } from "react";
import("aos/dist/aos.css");
const Animate = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: "2000",
    });
  }, []);

  return <>{children}</>;
};

export default Animate;
