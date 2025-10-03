
import Navbar from "./components/Navbar";
import Homes from "./pages/Homes";
import Footer from "./components/Footer";
import About from "./components/About";
import AppleCardsCarouselDemo from "./components/AppleCardsCarouselDemo";
import { Element } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas frameloop="demand" className="absolute inset-0">
        <Environment background blur={0.75}>
        <color attach="background" args={['black']} />
        <Lightformer intensity={1} color="white" position={[0, 1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={5} color="white" position={[8, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
      </Environment>
    </Canvas>
  );
};

export default function App() {
  return (
    <div className="relative w-full h-full">
      {/* Background 3D Scene */}
      <div className="fixed inset-0 -z-10">
        <ThreeScene />
      </div>

      {/* Main UI */}
      <Navbar />
      <Element name="home">
        <Homes />
      </Element>
      <Element name="appleCardsCarouselDemo">
        <AppleCardsCarouselDemo />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer />
    </div>
  );
}
