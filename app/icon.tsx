import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#e4ed98",
        color: "#252820",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 44,
        letterSpacing: "-4px",
        paddingRight: 5,
      }}
    >
      rb.
    </div>,
    size,
  );
}
