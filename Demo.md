## Type-Slide Text effect
```tsx
import { motiono } from "motiono";

const text = "Welcome to Motiono!";
const letters = text.split("");

export default function Hero() {
  return (
    <section style={{ padding: "4rem", fontSize: "3rem", fontWeight: 700 }}>
      <motiono.h1 style={{ display: "flex", gap: "0.1em", overflow: "hidden" }}>
        {letters.map((char, i) => (
          <motiono.span
            key={i}
            from={{ x: -100, opacity: 0 }}
            to={{ x: 0, opacity: 1 }}
            duration={0.6}
            ease="power2.out"
            stagger={0.05} // 50 ms between each letter
            delay={0.2 + i * 0.05} // cumulative delay per character
          >
            {char === " " ? "\u00A0" : char} {/* preserve spaces */}
          </motiono.span>
        ))}
      </motiono.h1>
    </section>
  );
}
```
