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

## Scale In Text

```tsx
// ScaleInText.jsx
import { motiono } from "motiono";

const text = "Scale In with Motiono!";
const letters = text.split("");

export default function ScaleInText() {
  return (
    <section style={{ padding: "4rem", fontSize: "3rem", fontWeight: 700 }}>
      <motiono.h1
        style={{ display: "flex", gap: "0.1em", justifyContent: "center" }}
      >
        {letters.map((char, i) => (
          <motiono.span
            key={i}
            from={{ scale: 0, opacity: 0 }}
            to={{ scale: 1, opacity: 1 }}
            duration={0.7}
            ease="elastic.out(1.2, 0.75)"
            delay={0.1 + i * 0.05} // 50 ms stagger per char
          >
            {char === " " ? "\u00A0" : char}
          </motiono.span>
        ))}
      </motiono.h1>
    </section>
  );
}
```

## Bouncy Text
```tsx
// BouncyText.jsx
import { motiono } from "motiono";

export default function BouncyText() {
  return (
    <section style={{ padding: "4rem", fontSize: "3.5rem", fontWeight: 700 }}>
      <motiono.h1
        from={{ y: -100, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.7}
        ease="bounce.out"
      >
        Bouncy Headline!
      </motiono.h1>
    </section>
  );
}
```

## Blur In Text
```tsx
import { motiono } from "motiono";

function BlurInText({ children }) {
  // Convert `children` to a string and split into characters
  const text =
    typeof children === "string" ? children : children?.props?.children ?? "";

  return (
    <section
      style={{
        padding: "4rem",
        fontSize: "3rem",
        fontWeight: 700,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {text.split("").map((char, index) => (
        <motiono.span
          key={index}
          from={{ filter: "blur(12px)", opacity: 0 }}
          to={{ filter: "blur(0px)", opacity: 1 }}
          duration={0.6}
          ease="power2.out"
          delay={index * 0.02}
          style={{ whiteSpace: "pre" }} // to preserve spaces and line breaks
        >
          {char}
        </motiono.span>
      ))}
    </section>
  );
}

function App() {
  return (
    <BlurInText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </BlurInText>
  );
}

export default App;
```
