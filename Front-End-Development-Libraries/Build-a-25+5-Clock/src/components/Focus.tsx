import { useEffect, useState } from "react";

export default function Focus() {
  const [time, setTime] = useState({
    hours: String(new Date().getHours()).padStart(2, "0"),
    minutes: String(new Date().getMinutes()).padStart(2, "0"),
  });

  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      setTime({
        hours: String(time.getHours()).padStart(2, "0"),
        minutes: String(time.getMinutes()).padStart(2, "0"),
      });

      setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="time-count text-[clamp(8rem,10vw,15rem)] text-center">
      {time.hours}
      {showColon ? ":" : " "}
      {time.minutes}
    </h2>
  );
}
