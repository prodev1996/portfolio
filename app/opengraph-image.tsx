import { ImageResponse } from "next/og";
export const alt = "Rajiv Bhandari. Curious mind. Practical builder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#e4ed98",
        color: "#252820",
        padding: "60px 70px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
        }}
      >
        <span style={{ fontWeight: 700 }}>Rajiv Bhandari</span>
        <span>Software, data & a human touch.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        <span>Curious mind.</span>
        <span>Practical builder.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #a5af64",
          paddingTop: 24,
          fontSize: 22,
        }}
      >
        <span>Application support / Data / Development</span>
        <span>rajivbhandari.com</span>
      </div>
    </div>,
    size,
  );
}
