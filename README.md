# Motiono 🎬

A powerful React motion library that brings GSAP animations to React components with a simple, declarative API.

## Features

![ezgif-51bb9f1cd06dee](https://github.com/user-attachments/assets/46e7bdd6-d44d-4361-acef-c89a87bbaa54)

- 🚀 **Easy to use**: Simple props-based API for GSAP animations
- 🎯 **All HTML elements**: Pre-built motion components for every HTML element
- ⚡ **Performance**: Built on GSAP for smooth, hardware-accelerated animations
- 🎨 **Flexible**: Support for all GSAP animation methods (from, to, fromTo, set)
- 🖱️ **Interactive**: Built-in hover and tap animations
- 📱 **React-friendly**: Uses React hooks and follows React patterns

## Installation

```bash
npm install motiono
```

## Quick Start

```jsx
import { motiono } from 'motiono';

function App() {
  return (
    <motiono.div
      from={{ opacity: 0, y: 50 }}
      to={{ opacity: 1, y: 0 }}
      duration={1}
      ease="power2.out"
    >
      <h1>Hello Motiono!</h1>
    </motiono.div>
  );
}
```

## API Reference

### Basic Animation Props

```jsx
<motiono.div
  from={{ opacity: 0 }}          // GSAP from animation
  to={{ opacity: 1 }}            // GSAP to animation
  fromTo={[{ x: -100 }, { x: 0 }]} // GSAP fromTo animation [from, to]
  set={{ rotation: 45 }}          // GSAP set (immediate)
  
  // Animation options
  duration={1.5}
  delay={0.5}
  ease="power2.inOut"
  repeat={2}
  repeatDelay={0.3}
  yoyo={true}
  stagger={0.1}
/>
```

### Interactive Animations

```jsx
<motiono.button
  to={{ scale: 1 }}
  onHover={{ scale: 1.1, duration: 0.3 }}
  onTap={{ scale: 0.95 }}
>
  Click me!
</motiono.button>
```

### Available Components

Motiono provides motion components for all HTML elements:

```jsx
// Layout
<motiono.div />
<motiono.section />
<motiono.main />
<motiono.header />
<motiono.footer />

// Typography
<motiono.h1 />
<motiono.h2 />
<motiono.p />
<motiono.span />

// Forms
<motiono.form />
<motiono.input />
<motiono.button />
<motiono.textarea />

// Media
<motiono.img />
<motiono.video />
<motiono.canvas />

// And many more...
```

## Examples

### Fade In Animation

```jsx
<motiono.div
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}
  duration={1}
>
  Fade in content
</motiono.div>
```

### Slide Up with Bounce

```jsx
<motiono.h1
  from={{ y: 100, opacity: 0 }}
  to={{ y: 0, opacity: 1 }}
  duration={1.2}
  ease="back.out(1.7)"
>
  Bouncy Title
</motiono.h1>
```

### Staggered List Animation

```jsx
<motiono.ul stagger={0.2}>
  <motiono.li from={{ x: -50, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
    Item 1
  </motiono.li>
  <motiono.li from={{ x: -50, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
    Item 2
  </motiono.li>
  <motiono.li from={{ x: -50, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
    Item 3
  </motiono.li>
</motiono.ul>
```

### Interactive Card

```jsx
<motiono.div
  className="card"
  to={{ scale: 1, rotationY: 0 }}
  onHover={{ 
    scale: 1.05, 
    rotationY: 5,
    duration: 0.4,
    ease: "power2.out"
  }}
  onTap={{ scale: 0.98 }}
>
  <h3>Hover me!</h3>
  <p>I'll scale and rotate on hover</p>
</motiono.div>
```

### Complex Animation Sequence

```jsx
<motiono.div
  fromTo={[
    { scale: 0, rotation: -180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1 }
  ]}
  duration={2}
  ease="elastic.out(1, 0.3)"
  delay={0.5}
>
  Complex animation
</motiono.div>
```

## GSAP Integration

Motiono is built on top of GSAP and exposes the GSAP instance and useGSAP hook:

```jsx
import { motiono, gsap, useGSAP } from 'motiono';

function CustomAnimation() {
  const ref = useRef();
  
  useGSAP(() => {
    gsap.timeline()
      .to(ref.current, { x: 100, duration: 1 })
      .to(ref.current, { y: 100, duration: 1 })
      .to(ref.current, { rotation: 360, duration: 1 });
  });

  return <div ref={ref}>Custom GSAP animation</div>;
}
```

## Requirements

- React 16.8.0 or higher
- GSAP 3.0.0 or higher
- @gsap/react 2.0.0 or higher


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/motiono/issues) on GitHub.

## Author
Nazmul Hossain
