import Image from "next/image";
import { Inter } from "next/font/google";
import ScrabbleBoard from "@/components/ScrabbleBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <h1> welcome to my game!</h1>
    <ScrabbleBoard />
    </>
  );
}
