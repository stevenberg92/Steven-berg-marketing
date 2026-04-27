import React from "react";
import { motion } from "framer-motion";

export function InfiniteSlider({ children, duration = 28, gap = 64, className = "" }) {
  const items = React.Children.toArray(children);
  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        flex: 1,
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        style={{ display: "flex", alignItems: "center" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <div key={`a-${i}`} style={{ paddingRight: gap, flexShrink: 0 }}>
            {item}
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`b-${i}`} style={{ paddingRight: gap, flexShrink: 0 }} aria-hidden="true">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
