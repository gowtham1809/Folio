import { useEffect } from "react";
import "./cursor.scss";

export default function CursorGlow() {
  useEffect(() => {
    const glow:any = document.getElementById("cursor-glow");

    const move = (e:any) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor-glow"></div>;
}
