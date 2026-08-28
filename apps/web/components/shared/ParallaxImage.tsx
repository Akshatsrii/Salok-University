"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxImage({ src, alt, height = "h-96" }: { src: string, alt: string, height?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={"relative overflow-hidden w-full ${height} rounded-3xl shadow-2xl"}>
      <motion.div style={{ y, height: "140%", top: "-20%" }} className="absolute inset-0 w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}
