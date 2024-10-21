import { useState } from "react";
import "../../assets/text-effects/text-effect-particles/style.stylus"; // Import the Stylus file directly
import "./text-effect-particles.css";

function TextEffectParticles() {
  const texts = [
    "H",
    "a",
    "p",
    "p",
    "y",
    "B",
    "i",
    "r",
    "t",
    "h",
    "d",
    "a",
    "y",
    ":)",
  ];

  const [rerender, setRerender] = useState(false);

  setInterval(() => {
    setRerender(true);
  }, 10);

  const numberOfParticle = 12;

  return (
    <div className="text-effect-paricles">
      {texts.map((text, i) => (
        <div
          key={`background-${i}`}
          className={`background background${i}`}
        ></div>
      ))}
      <div className="criterion">
        {texts.map((text, i) => (
          <div key={`text-${i}`} className={`text text${i}`}>
            {text}
          </div>
        ))}
        {texts.map((_, i) => (
          <div key={`frame-${i}`} className={`frame frame${i}`}></div>
        ))}
        {texts.map((_, i) =>
          Array.from({ length: numberOfParticle }).map((_, j) => (
            <div
              key={`particle-${i}-${j}`}
              className={`particle particle${i}${j}`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default TextEffectParticles;
