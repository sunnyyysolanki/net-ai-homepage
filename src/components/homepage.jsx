"use client";

import Image from "next/image";
import { Download } from "@geist-ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import LogoMarquee from "@/components/logo-marquee";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className=" flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex justify-between w-full">
        <div className="left flex flex-col gap-4 w-1/2">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col text-8xl font-extrabold"
          >
            <p className=" drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">
              The
            </p>
            <p className=" drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">
              NET AI
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p>Network Incident Engine</p>
            <p className="pt-2 mb-6 w-[500px] text-gray-500">
              The NET AI (Network Incident Engine) is an advanced AI-driven
              system designed to detect, analyze, and respond to network
              incidents in real-time.
            </p>
          </motion.div>
          <div className="flex  gap-6 ">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link href="/linux-download">
                <Button className="cursor-pointer p-6 rounded-md font-semibold ">
                  <span>Download For Linux</span>
                  <span>
                    <Download />
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link href="/window-download">
                <Button className="cursor-pointer p-6 rounded-md font-semibold ">
                  <span>Download For Windows</span>
                  <Download />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 95 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="right w-1/2"
        >
          <div className="relative w-full h-[500px] flex items-center rounded-xl justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-xl overflow-hidden">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md"></div>

            {/* Floating Blobs */}
            <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
            <div className="absolute w-64 h-64 bg-green-500 opacity-30 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>

            {/* Centered Content */}
            <div className="relative flex flex-col items-center justify-center p-10 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20">
              <h1 className="text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">
                <span className="text-blue-400">NET</span>{" "}
                <span className="text-green-400">AI</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                Network Incident Engine
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* marquee */}
      <LogoMarquee></LogoMarquee>
      {/* Why Net Ai */}
      <div className="mt-3 flex flex-col gap-3 ">
        <h1 className=" text-7xl font-bold ">Why Net Ai?</h1>
        <div className="w-3/4 flex flex-col gap-4">
          <p className=" text-gray-500">
            NetAI sets itself apart with its innovative use of proprietary AI
            technology specifically designed for advanced network management.
            Our patented Network Incident Engine technology is built from the
            ground up with a focus on speed and accuracy, redefining efficiency
            standards in network management by driving MTTR to mere seconds.
          </p>

          <div>
            <p className="font-bold text-lg">
              Transformative Impact on Network Operations
            </p>
            <p className="text-gray-500">
              NetAI’s Network Incident Engine slashes MTTR by more than 90%,
              transforming hours of downtime into mere seconds. This
              breakthrough patented Network Native AI technology has been
              developed by world-leading scientists in the fields of Networking
              and Artificial Intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
