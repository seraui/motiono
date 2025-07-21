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

## Wavy Text
```tsx
import { motiono } from "motiono";

function WavyText({ children }) {
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
          from={{ y: 0 }}
          to={{ y: -15 }}
          duration={0.6}
          repeat={-1}
          yoyo={true}
          ease="sine.inOut"
          delay={index * 0.06}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motiono.span>
      ))}
    </section>
  );
}

function App() {
  return <WavyText>Wave your creativity 🌊</WavyText>;
}

export default App;
```

# TextLoader 
```tsx
// TextLoader.jsx
import { motiono } from "motiono";
import { useEffect, useState } from "react";

/**
 * TextLoader
 * @param {string[]} messages  - Array of messages to cycle through
 * @param {number}   interval  - Milliseconds between message changes (default 2000)
 * @param {string}   direction - "vertical" (default) | "horizontal"
 */
export default function TextLoader({
  messages = ["Loading…", "Still working…", "Almost there…"],
  interval = 2000,
  direction = "vertical",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [messages, interval]);

  const isHorizontal = direction === "horizontal";
  const axis = isHorizontal ? "x" : "y";
  const dist = isHorizontal ? 30 : 20; // px

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        fontSize: "1.125rem",
        fontWeight: 600,
        overflow: "hidden",
      }}
    >
      <motiono.div
        key={index} // triggers re-animation on change
        from={{ opacity: 0, [axis]: dist }}
        to={{ opacity: 1, [axis]: 0 }}
        exit={{ opacity: 0, [axis]: -dist }}
        transition={{ duration: 0.5, ease: "power2.out" }}
        style={{ position: "absolute" }}
      >
        {messages[index]}
      </motiono.div>
    </section>
  );
}
```

# SmoothSprings Text

```tsx
import { motiono } from "motiono";

const text = "Springs Animation!";
const letters = text.split("");

export default function SmoothSpringsText() {
  return (
    <section style={{ padding: "4rem", fontSize: "3rem", fontWeight: 700 }}>
      <motiono.h1
        style={{
          display: "flex",
          gap: "0.1em",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        {letters.map((char, i) => (
          <motiono.span
            key={i}
            from={{ y: 40, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            type="spring"
            stiffness={90} // low stiffness = smooth
            damping={20} // moderate damping = no overshoot
            mass={0.8} // slight mass = natural motion
            delay={i * 0.06} // stagger per character
          >
            {char === " " ? "\u00A0" : char}
          </motiono.span>
        ))}
      </motiono.h1>
    </section>
  );
}
```

