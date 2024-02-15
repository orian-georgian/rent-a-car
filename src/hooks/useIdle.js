import { useState, useEffect } from "react";

const useIdle = (timer) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeout = null;

    const startTimeout = () => {
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, timer);
    };

    const handleActivity = () => {
      clearTimeout(timeout);
      setIsIdle(false);
      startTimeout();
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    document.addEventListener("scroll", handleActivity);

    startTimeout();

    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      document.removeEventListener("scroll", handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  return isIdle;
};

export default useIdle;
