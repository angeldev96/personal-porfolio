/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { getResumeData } from "../data/resume-data";
import { DEFAULT_LOCALE } from "../i18n/config";

export const alt = "Minimalist Resume";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const resume = getResumeData(DEFAULT_LOCALE);

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={resume.avatarUrl}
            alt={resume.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10%",
              marginBottom: "2rem",
            }}
          />
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            {resume.name}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "#666",
              maxWidth: "600px",
              lineHeight: "1.4",
            }}
          >
            {resume.about}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "1rem",
            }}
          >
            {resume.contact.email && (
              <div style={{ fontSize: "1rem", color: "#666" }}>
                {resume.personalWebsiteUrl}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
