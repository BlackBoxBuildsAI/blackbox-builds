import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>BlackBox Builds | AI Systems for Visionaries</title>
        <meta name="description" content="AI-powered tools, automation systems, and premium digital platforms built by BlackBox Builds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-black text-white font-inter min-h-screen">
        <HeroSection />
      </main>
    </>
  );
}
