import {Text3D, useTexture} from "@react-three/drei";
import React from "react";

/** Displaying 3D text */
export function CustomText3D({
  /** text to be displayed of type string */
  text = "Enter text as param",
    subtext = "Enter text as param",
  /** props to override any arguments to Text3D component */
  ...props
}) {
  // matcapTexture from here: https://github.com/emmelleppi/matcaps
  const matcapTexture = useTexture("./images/matcap.png");
  return (
    <>
      <Text3D
        font="./fonts/Bebas Neue_Regular.json"
        size={3.5}
        height={0.5}
        curveSegments={20}
        bevelEnabled={true}
        bevelThickness={0.15}
        bevelSize={0.15}
        bevelOffset={0}
        bevelSegments={1}
        letterSpacing={0.2}
        position={[-12, 20, 15]}
        rotation={[1.55, -Math.PI, 2.81]}
        {...props}
      >
        {text}
        <meshMatcapMaterial
          matcap={matcapTexture}
          wireframes={true}
          opacity={0.8}
        />
      </Text3D>
        <Text3D
        theatreKey="Subtext"
        font="./fonts/Bebas Neue_Regular.json"
        size={0.5}
        height={0}
        curveSegments={5}
        bevelEnabled={true}
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={1}
        letterSpacing={0.2}
        position={[-6.56, 20.68, 18.16]}
        rotation={[1.55, -Math.PI, 2.81]}
        {...props}
      >
        {subtext}
        <meshMatcapMaterial
          matcap={matcapTexture}
          wireframes={true}
          opacity={0.8}
        />
      </Text3D>
    </>
  );
}
