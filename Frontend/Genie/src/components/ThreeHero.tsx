import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import LoadingOverlay from "./three/LoadingOverlay";
import { FloatingParticles } from "./three/Scenes";

type SceneKey = "globe";

function LogoModel() { return null; }

export default function ThreeHero({ fullScreen = false }: { fullScreen?: boolean }) {
  const [scene] = useState<SceneKey>("globe");
  const buttons: SceneKey[] = [];
  return (
    <div className={`relative w-full ${fullScreen ? "h-[100vh]" : "h-[420px] lg:h-[520px]"}`}>
      <Canvas camera={{ position: [3.2, 2.2, 3.2], fov: 50 }} shadows>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} castShadow />
        <Suspense fallback={<Html center><LoadingOverlay /></Html>}>
          <FloatingParticles />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </div>
  );
}


