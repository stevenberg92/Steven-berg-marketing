import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { InfiniteSlider } from "./ui/infinite-slider";

const HLS_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8";
const MP4_FALLBACK =
  "/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1";

const logoItems = [
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia" },
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub" },
  { src: "https://html.tailus.io/blocks/customers/google.svg", alt: "Google" },
  { src: "https://html.tailus.io/blocks/customers/microsoft.svg", alt: "Microsoft" },
  { src: "https://html.tailus.io/blocks/customers/stripe.svg", alt: "Stripe" },
  { src: "https://html.tailus.io/blocks/customers/shopify.svg", alt: "Shopify" },
  { src: "https://html.tailus.io/blocks/customers/meta.svg", alt: "Meta" },
];

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({ startLevel: -1 });
      hlsInstance.loadSource(HLS_URL);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          video.src = MP4_FALLBACK;
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    } else {
      video.src = MP4_FALLBACK;
    }

    return () => {
      if (hlsInstance) hlsInstance.destroy();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        marginTop: -150,
        zIndex: 10,
      }}
    >
      {/* Side fades */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #010101 0%, transparent 18%, transparent 82%, #010101 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {/* Top fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 220,
          background: "linear-gradient(to bottom, #010101, transparent)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          background: "linear-gradient(to top, #010101, transparent)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

function LogoCloud() {
  return (
    <section
      style={{
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(4px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "28px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}
      >
        <div
          style={{
            flexShrink: 0,
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            lineHeight: 1.6,
            display: "none",
          }}
          className="md:block"
        >
          Powering the<br />best teams
        </div>
        <div
          style={{
            width: 1,
            height: 36,
            background: "rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}
          className="hidden md:block"
        />
        <InfiniteSlider duration={30} gap={56}>
          {logoItems.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={{
                height: 20,
                filter: "brightness(0) invert(1)",
                opacity: 0.45,
              }}
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <>
      <section
        style={{
          position: "relative",
          background: "#010101",
          overflow: "visible",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-25%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "75%",
              height: 720,
              background:
                "radial-gradient(ellipse at center, rgba(201,103,232,0.22) 0%, rgba(152,58,214,0.12) 45%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: 420,
              height: 420,
              background:
                "radial-gradient(ellipse, rgba(250,147,250,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: 420,
              height: 420,
              background:
                "radial-gradient(ellipse, rgba(152,58,214,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Text content — z-20 stays above the video */}
        <div
          style={{
            position: "relative",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 148,
            paddingBottom: 0,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(28,27,36,0.15)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              marginBottom: 36,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
                borderRadius: 7,
                background:
                  "linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)",
                boxShadow: "0 0 18px rgba(201,103,232,0.75)",
                flexShrink: 0,
              }}
            >
              <Zap size={11} fill="white" color="white" />
            </span>
            <span
              style={{
                color: "rgba(200,200,210,0.9)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Used by founders. Loved by devs.
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              background:
                "linear-gradient(180deg, #ffffff 25%, rgba(201,103,232,0.85) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 28,
              maxWidth: 820,
            }}
          >
            Your Vision
            <br />
            Our Digital Reality.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 18,
              maxWidth: 540,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 44,
              lineHeight: 1.68,
              margin: "0 auto 44px",
            }}
          >
            We turn bold ideas into modern designs that don&apos;t just look
            amazing — they grow your business fast.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                padding: 2,
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, rgba(250,147,250,0.45), rgba(201,103,232,0.45), rgba(152,58,214,0.45))",
                backdropFilter: "blur(14px)",
              }}
            >
              <a
                href="#kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 26px",
                  borderRadius: 999,
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
              >
                Book a 15-min call
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Video — z-10, pulled up behind text */}
        <VideoBackground />
      </section>

      {/* Logo cloud directly below video */}
      <LogoCloud />
    </>
  );
}
