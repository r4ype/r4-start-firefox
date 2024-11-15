import { useState, useEffect } from "react";
import InfoList from "./components/Infos/InfoList";

export default function Header() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const amPm = now.getHours() >= 12 ? "PM" : "AM";
      const formattedTime = `${hours}:${minutes} ${amPm}`;
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const shortInfoData = [
    { context: "parsa", color: "green", icon: "user" },
    { context: "30 C", color: "mauve", icon: "sun" },
    { context: time, color: "peach", icon: "time" },
    { context: date, color: "pink", icon: "calendar" },
  ];

  return (
    <header className="flex flex-col w-full h-full md:items-center justify-center">
      <h1 className="text-clip text-ctp-blue relative text-center text-9xl font-bold">
        R4
      </h1>
      <div className="mt-4">
        <InfoList infos={shortInfoData} />
      </div>
    </header>
  );
}
