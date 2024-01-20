import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = ({isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')

    return (
        <mesh>
            <hemisphereLight 
                intensity={2} 
                groundColor='black' 
            />
            <pointLight 
                intensity={1} 
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.6 : 0.75}
                position={isMobile ? [0, -2.5, -1.8] : [0, -3, -1.8]}
            />
        </mesh>
    )
}




const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
  }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2 }
                    minPolarAngle={Math.PI / 2 }
                />
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default ComputersCanvas