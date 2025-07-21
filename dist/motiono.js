// motiono.js
import { forwardRef, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Create a factory function for GSAP motion components
const createMotionComponent = (element) => {
  return forwardRef(
    (
      {
        children,
        // Direct GSAP props
        from,
        to,
        fromTo,
        set,
        delay,
        duration,
        ease,
        repeat,
        repeatDelay,
        yoyo,
        stagger,
        onHover,
        onTap,
        ...props
      },
      ref
    ) => {
      const localRef = useRef(null);
      const elementRef = ref || localRef;

      useGSAP(
        () => {
          if (!elementRef.current) return;

          // Build GSAP animation options from individual props
          const gsapOptions = {};
          if (delay !== undefined) gsapOptions.delay = delay;
          if (duration !== undefined) gsapOptions.duration = duration;
          if (ease !== undefined) gsapOptions.ease = ease;
          if (repeat !== undefined) gsapOptions.repeat = repeat;
          if (repeatDelay !== undefined) gsapOptions.repeatDelay = repeatDelay;
          if (yoyo !== undefined) gsapOptions.yoyo = yoyo;
          if (stagger !== undefined) gsapOptions.stagger = stagger;

          // Direct GSAP set method
          if (set) {
            gsap.set(elementRef.current, { ...set, ...gsapOptions });
          }

          // Direct GSAP from method
          if (from) {
            gsap.from(elementRef.current, { ...from, ...gsapOptions });
          }

          // Direct GSAP to method
          if (to) {
            gsap.to(elementRef.current, { ...to, ...gsapOptions });
          }

          // Direct GSAP fromTo method
          if (fromTo && Array.isArray(fromTo) && fromTo.length === 2) {
            gsap.fromTo(elementRef.current, fromTo[0], {
              ...fromTo[1],
              ...gsapOptions,
            });
          }
        },
        {
          dependencies: [
            from,
            to,
            fromTo,
            set,
            delay,
            duration,
            ease,
            repeat,
            repeatDelay,
            yoyo,
            stagger,
          ],
        }
      );

      // Handle hover animations
      useEffect(() => {
        if (!onHover || !elementRef.current) return;

        const element = elementRef.current;

        const handleMouseEnter = () => {
          gsap.to(element, onHover);
        };

        const handleMouseLeave = () => {
          // Return to original state if 'to' prop exists
          if (to) {
            gsap.to(element, to);
          }
        };

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, [onHover, to]);

      // Handle tap animations
      useEffect(() => {
        if (!onTap || !elementRef.current) return;

        const element = elementRef.current;

        const handleMouseDown = () => {
          gsap.to(element, { ...onTap, duration: 0.1 });
        };

        const handleMouseUp = () => {
          // Return to original state if 'to' prop exists
          if (to) {
            gsap.to(element, to);
          }
        };

        element.addEventListener("mousedown", handleMouseDown);
        element.addEventListener("mouseup", handleMouseUp);
        element.addEventListener("mouseleave", handleMouseUp);

        return () => {
          element.removeEventListener("mousedown", handleMouseDown);
          element.removeEventListener("mouseup", handleMouseUp);
          element.removeEventListener("mouseleave", handleMouseUp);
        };
      }, [onTap, to]);

      const Element = element;

      return (
        <Element ref={elementRef} {...props}>
          {children}
        </Element>
      );
    }
  );
};

// Create motiono components for all HTML elements
const motiono = {
  // Document structure
  html: createMotionComponent("html"),
  head: createMotionComponent("head"),
  body: createMotionComponent("body"),

  // Sectioning elements
  section: createMotionComponent("section"),
  article: createMotionComponent("article"),
  nav: createMotionComponent("nav"),
  aside: createMotionComponent("aside"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  main: createMotionComponent("main"),

  // Heading elements
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  h5: createMotionComponent("h5"),
  h6: createMotionComponent("h6"),

  // Text content elements
  div: createMotionComponent("div"),
  p: createMotionComponent("p"),
  span: createMotionComponent("span"),
  pre: createMotionComponent("pre"),
  blockquote: createMotionComponent("blockquote"),
  hr: createMotionComponent("hr"),

  // List elements
  ul: createMotionComponent("ul"),
  ol: createMotionComponent("ol"),
  li: createMotionComponent("li"),
  dl: createMotionComponent("dl"),
  dt: createMotionComponent("dt"),
  dd: createMotionComponent("dd"),

  // Inline text elements
  a: createMotionComponent("a"),
  strong: createMotionComponent("strong"),
  b: createMotionComponent("b"),
  em: createMotionComponent("em"),
  i: createMotionComponent("i"),
  small: createMotionComponent("small"),
  mark: createMotionComponent("mark"),
  del: createMotionComponent("del"),
  ins: createMotionComponent("ins"),
  sub: createMotionComponent("sub"),
  sup: createMotionComponent("sup"),
  code: createMotionComponent("code"),
  kbd: createMotionComponent("kbd"),
  samp: createMotionComponent("samp"),
  var: createMotionComponent("var"),
  time: createMotionComponent("time"),
  abbr: createMotionComponent("abbr"),
  cite: createMotionComponent("cite"),
  q: createMotionComponent("q"),

  // Media elements
  img: createMotionComponent("img"),
  video: createMotionComponent("video"),
  audio: createMotionComponent("audio"),
  source: createMotionComponent("source"),
  track: createMotionComponent("track"),
  canvas: createMotionComponent("canvas"),
  svg: createMotionComponent("svg"),
  picture: createMotionComponent("picture"),

  // Form elements
  form: createMotionComponent("form"),
  input: createMotionComponent("input"),
  textarea: createMotionComponent("textarea"),
  button: createMotionComponent("button"),
  select: createMotionComponent("select"),
  option: createMotionComponent("option"),
  optgroup: createMotionComponent("optgroup"),
  label: createMotionComponent("label"),
  fieldset: createMotionComponent("fieldset"),
  legend: createMotionComponent("legend"),
  datalist: createMotionComponent("datalist"),
  output: createMotionComponent("output"),
  progress: createMotionComponent("progress"),
  meter: createMotionComponent("meter"),

  // Table elements
  table: createMotionComponent("table"),
  thead: createMotionComponent("thead"),
  tbody: createMotionComponent("tbody"),
  tfoot: createMotionComponent("tfoot"),
  tr: createMotionComponent("tr"),
  th: createMotionComponent("th"),
  td: createMotionComponent("td"),
  caption: createMotionComponent("caption"),
  colgroup: createMotionComponent("colgroup"),
  col: createMotionComponent("col"),

  // Interactive elements
  details: createMotionComponent("details"),
  summary: createMotionComponent("summary"),
  dialog: createMotionComponent("dialog"),
  menu: createMotionComponent("menu"),

  // Embedded content
  iframe: createMotionComponent("iframe"),
  embed: createMotionComponent("embed"),
  object: createMotionComponent("object"),
  param: createMotionComponent("param"),

  // Scripting
  script: createMotionComponent("script"),
  noscript: createMotionComponent("noscript"),

  // Ruby annotation
  ruby: createMotionComponent("ruby"),
  rt: createMotionComponent("rt"),
  rp: createMotionComponent("rp"),

  // Web components
  slot: createMotionComponent("slot"),
  template: createMotionComponent("template"),

  // Other elements
  address: createMotionComponent("address"),
  figure: createMotionComponent("figure"),
  figcaption: createMotionComponent("figcaption"),
  data: createMotionComponent("data"),
  wbr: createMotionComponent("wbr"),
  bdi: createMotionComponent("bdi"),
  bdo: createMotionComponent("bdo"),
  s: createMotionComponent("s"),
  u: createMotionComponent("u"),

  // HTML5 semantic elements
  hgroup: createMotionComponent("hgroup"),
  search: createMotionComponent("search"),
};

export { motiono, gsap, useGSAP };
