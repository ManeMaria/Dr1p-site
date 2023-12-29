import { useEffect, useState } from "react";

export const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);


  return isMobile;
}