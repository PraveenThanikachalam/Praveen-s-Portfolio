"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import EntryTop from "./Motions/EntryTop";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variants = {
    hidden: { opacity: 0, y: -200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <motion.div
          variants={variants}
          initial={variants.hidden}
          animate={variants.enter}
          defaultValue={0}
          transition={{ type: "spring", duration: "1" }}
          className={`your-custom-class g-black/75 sticky top-0 z-10 brightness-75`}
        >
          <Navbar />
        </motion.div>
        <Toaster position="top-right" reverseOrder={false} />

        {children}
      </body>
    </html>
  );
}
