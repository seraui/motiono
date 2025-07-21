import * as React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// GSAP animation properties
export interface GSAPAnimationProps {
  x?: number | string;
  y?: number | string;
  z?: number | string;
  rotation?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  scaleZ?: number;
  skewX?: number;
  skewY?: number;
  opacity?: number;
  autoAlpha?: number;
  width?: number | string;
  height?: number | string;
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number | string;
  transformOrigin?: string;
  filter?: string;
  clipPath?: string;
  [key: string]: any;
}

// GSAP timing and easing options
export interface GSAPTimingProps {
  delay?: number;
  duration?: number;
  ease?: string | gsap.EaseFunction;
  repeat?: number;
  repeatDelay?: number;
  yoyo?: boolean;
  stagger?: number | gsap.StaggerVars;
}

// Core motion props that all motiono components accept
export interface MotionProps extends GSAPTimingProps {
  from?: GSAPAnimationProps;
  to?: GSAPAnimationProps;
  fromTo?: [GSAPAnimationProps, GSAPAnimationProps];
  set?: GSAPAnimationProps;
  onHover?: GSAPAnimationProps;
  onTap?: GSAPAnimationProps;
  children?: React.ReactNode;
}

// HTML element props mapping
export type HTMLElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] & MotionProps;

// Motion component type
export type MotionComponent<T extends keyof JSX.IntrinsicElements> =
  React.ForwardRefExoticComponent<
    HTMLElementProps<T> & React.RefAttributes<HTMLElement>
  >;

// Motiono components interface
export interface MotinoComponents {
  // Document structure
  html: MotionComponent<"html">;
  head: MotionComponent<"head">;
  body: MotionComponent<"body">;

  // Sectioning elements
  section: MotionComponent<"section">;
  article: MotionComponent<"article">;
  nav: MotionComponent<"nav">;
  aside: MotionComponent<"aside">;
  header: MotionComponent<"header">;
  footer: MotionComponent<"footer">;
  main: MotionComponent<"main">;

  // Heading elements
  h1: MotionComponent<"h1">;
  h2: MotionComponent<"h2">;
  h3: MotionComponent<"h3">;
  h4: MotionComponent<"h4">;
  h5: MotionComponent<"h5">;
  h6: MotionComponent<"h6">;

  // Text content elements
  div: MotionComponent<"div">;
  p: MotionComponent<"p">;
  span: MotionComponent<"span">;
  pre: MotionComponent<"pre">;
  blockquote: MotionComponent<"blockquote">;
  hr: MotionComponent<"hr">;

  // List elements
  ul: MotionComponent<"ul">;
  ol: MotionComponent<"ol">;
  li: MotionComponent<"li">;
  dl: MotionComponent<"dl">;
  dt: MotionComponent<"dt">;
  dd: MotionComponent<"dd">;

  // Inline text elements
  a: MotionComponent<"a">;
  strong: MotionComponent<"strong">;
  b: MotionComponent<"b">;
  em: MotionComponent<"em">;
  i: MotionComponent<"i">;
  small: MotionComponent<"small">;
  mark: MotionComponent<"mark">;
  del: MotionComponent<"del">;
  ins: MotionComponent<"ins">;
  sub: MotionComponent<"sub">;
  sup: MotionComponent<"sup">;
  code: MotionComponent<"code">;
  kbd: MotionComponent<"kbd">;
  samp: MotionComponent<"samp">;
  var: MotionComponent<"var">;
  time: MotionComponent<"time">;
  abbr: MotionComponent<"abbr">;
  cite: MotionComponent<"cite">;
  q: MotionComponent<"q">;

  // Media elements
  img: MotionComponent<"img">;
  video: MotionComponent<"video">;
  audio: MotionComponent<"audio">;
  source: MotionComponent<"source">;
  track: MotionComponent<"track">;
  canvas: MotionComponent<"canvas">;
  svg: MotionComponent<"svg">;
  picture: MotionComponent<"picture">;

  // Form elements
  form: MotionComponent<"form">;
  input: MotionComponent<"input">;
  textarea: MotionComponent<"textarea">;
  button: MotionComponent<"button">;
  select: MotionComponent<"select">;
  option: MotionComponent<"option">;
  optgroup: MotionComponent<"optgroup">;
  label: MotionComponent<"label">;
  fieldset: MotionComponent<"fieldset">;
  legend: MotionComponent<"legend">;
  datalist: MotionComponent<"datalist">;
  output: MotionComponent<"output">;
  progress: MotionComponent<"progress">;
  meter: MotionComponent<"meter">;

  // Table elements
  table: MotionComponent<"table">;
  thead: MotionComponent<"thead">;
  tbody: MotionComponent<"tbody">;
  tfoot: MotionComponent<"tfoot">;
  tr: MotionComponent<"tr">;
  th: MotionComponent<"th">;
  td: MotionComponent<"td">;
  caption: MotionComponent<"caption">;
  colgroup: MotionComponent<"colgroup">;
  col: MotionComponent<"col">;

  // Interactive elements
  details: MotionComponent<"details">;
  summary: MotionComponent<"summary">;
  dialog: MotionComponent<"dialog">;
  menu: MotionComponent<"menu">;

  // Embedded content
  iframe: MotionComponent<"iframe">;
  embed: MotionComponent<"embed">;
  object: MotionComponent<"object">;
  param: MotionComponent<"param">;

  // Scripting
  script: MotionComponent<"script">;
  noscript: MotionComponent<"noscript">;

  // Ruby annotation
  ruby: MotionComponent<"ruby">;
  rt: MotionComponent<"rt">;
  rp: MotionComponent<"rp">;

  // Web components
  slot: MotionComponent<"slot">;
  template: MotionComponent<"template">;

  // Other elements
  address: MotionComponent<"address">;
  figure: MotionComponent<"figure">;
  figcaption: MotionComponent<"figcaption">;
  data: MotionComponent<"data">;
  wbr: MotionComponent<"wbr">;
  bdi: MotionComponent<"bdi">;
  bdo: MotionComponent<"bdo">;
  s: MotionComponent<"s">;
  u: MotionComponent<"u">;

  // HTML5 semantic elements
  hgroup: MotionComponent<"hgroup">;
  search: MotionComponent<"search">;
}

// Main exports
export declare const motiono: MotinoComponents;
export { gsap, useGSAP };

// Default export
declare const _default: {
  motiono: MotinoComponents;
  gsap: typeof gsap;
  useGSAP: typeof useGSAP;
};

export default _default;
