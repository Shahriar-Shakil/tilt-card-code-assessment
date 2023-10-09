import Tilt from "react-parallax-tilt";

export default function TiltContainer({ children }) {
  return (
    <Tilt transitionSpeed={3500} scale={1.05}>
      {children}
    </Tilt>
  );
}
