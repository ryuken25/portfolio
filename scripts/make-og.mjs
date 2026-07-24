// One-off: render the OG card SVG to public/og.png. Not part of the app build.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="14%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.34"/>
      <stop offset="60%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="100%" cy="10%" r="60%">
      <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.16"/>
      <stop offset="55%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0B0B10"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect x="8" y="8" width="1184" height="614" rx="22" fill="none" stroke="#282833" stroke-width="2"/>

  <!-- monogram -->
  <g transform="translate(80,74)">
    <rect width="66" height="66" rx="15" fill="#0d0d14" stroke="#7C3AED" stroke-width="3"/>
    <text x="33" y="34" fill="#C4B5FD" font-family="Consolas, 'Courier New', monospace" font-size="30" font-weight="700" text-anchor="middle" dominant-baseline="central" letter-spacing="-1">AB</text>
  </g>
  <text x="164" y="118" fill="#A7A7B4" font-family="Consolas, 'Courier New', monospace" font-size="20" letter-spacing="3">// AI FULL-STACK &amp; AUTOMATION</text>

  <!-- name + title -->
  <text x="80" y="272" fill="#E9E9EE" font-family="'Segoe UI', Arial, sans-serif" font-size="104" font-weight="800" letter-spacing="-2">Arya Bhanu</text>
  <text x="82" y="330" fill="#A78BFA" font-family="'Segoe UI', Arial, sans-serif" font-size="34" font-weight="600">AI Full-Stack Developer &amp; Automation Engineer</text>

  <!-- live apps -->
  <g font-family="Consolas, 'Courier New', monospace" font-size="26">
    <g transform="translate(82,432)">
      <circle cx="9" cy="-8" r="7" fill="#4ADE80"/>
      <text x="30" y="0" fill="#4ADE80" font-weight="700">LIVE</text>
      <text x="120" y="0" fill="#C4B5FD">kenshi-questpay.vercel.app</text>
    </g>
    <g transform="translate(82,478)">
      <circle cx="9" cy="-8" r="7" fill="#4ADE80"/>
      <text x="30" y="0" fill="#4ADE80" font-weight="700">LIVE</text>
      <text x="120" y="0" fill="#C4B5FD">kenshi-notes.vercel.app</text>
    </g>
    <g transform="translate(82,524)">
      <circle cx="9" cy="-8" r="7" fill="#4ADE80"/>
      <text x="30" y="0" fill="#4ADE80" font-weight="700">LIVE</text>
      <text x="120" y="0" fill="#C4B5FD">ganga-schedule-universal.vercel.app</text>
    </g>
  </g>

  <line x1="80" y1="566" x2="1120" y2="566" stroke="#20202a" stroke-width="1"/>
  <text x="80" y="600" fill="#6E6E7C" font-family="Consolas, 'Courier New', monospace" font-size="21">github.com/ryuken25  ·  winayaarya@gmail.com  ·  Bali → Kuala Lumpur</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: { loadSystemFonts: true },
  background: "#0B0B10",
});
const png = resvg.render().asPng();
writeFileSync(new URL("../public/og.png", import.meta.url), png);
console.log("wrote public/og.png", png.length, "bytes");
