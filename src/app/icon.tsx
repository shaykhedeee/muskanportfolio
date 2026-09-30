import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#FFC928",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#49352C",
          borderRadius: "50%",
          fontWeight: 800,
          fontFamily: "serif",
          border: "2px solid #49352C",
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  );
}
