import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Muskan Pareek — Interior Designer | AutoCAD, SketchUp & 3D Visualization";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF6F0",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(240, 184, 58, 0.18) 0%, transparent 60%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: "#382B22",
          border: "12px solid #E8DFD3",
        }}
      >
        {/* Top Header Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 24px",
              borderRadius: "999px",
              backgroundColor: "#FFFDF7",
              border: "1px solid #D5C7B7",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#F0B83A",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                letterSpacing: "0.22em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#382B22",
              }}
            >
              STUDIO MUSKAN PAREEK · ARCHITECTURE & INTERIORS
            </span>
          </div>

          <div
            style={{
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#5A6B47",
              fontWeight: 600,
            }}
          >
            BENGALURU & JAIPUR, INDIA
          </div>
        </div>

        {/* Center Main Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              fontSize: "68px",
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#382B22",
            }}
          >
            <span style={{ marginRight: "16px" }}>Designing spaces that feel like</span>
            <span
              style={{
                color: "#C28919",
                fontStyle: "italic",
              }}
            >
              home.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#6E5B4B",
              maxWidth: "850px",
            }}
          >
            Residential & commercial spaces, precision System 32 millwork, AutoCAD working drawings & photorealistic 3D visualization.
          </div>
        </div>

        {/* Bottom Metrics & Badge Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "28px",
            borderTop: "2px solid #E5D9CB",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "48px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#382B22" }}>50+</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6E5B4B" }}>
                Projects Designed
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#382B22" }}>4+</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6E5B4B" }}>
                Years Practice
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#382B22" }}>100%</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6E5B4B" }}>
                Turnkey Detailing
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "999px",
              backgroundColor: "#F0B83A",
              color: "#2C2018",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            muskanpareek.com ↗
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
