import { FloatingIcon } from "./FloatingIcon";

export function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Floating Document Icon 1 */}
      <FloatingIcon
        position={{ top: "5rem", left: "2.5rem" }}
        size="3rem"
        animation="slow"
        icon="document"
      />

      {/* Floating Seal/Shield Icon 1 */}
      <FloatingIcon
        position={{ top: "8rem", right: "4rem" }}
        size="2.5rem"
        animation="medium"
        icon="shield"
      />

      {/* Floating Building Icon */}
      <FloatingIcon
        position={{ bottom: "10rem", left: "4rem" }}
        size="3.5rem"
        animation="slow-delayed"
        icon="building"
      />

      {/* Floating Stamp Icon */}
      <FloatingIcon
        position={{ bottom: "8rem", right: "5rem" }}
        size="2.75rem"
        animation="medium-delayed"
        icon="stamp"
      />

      {/* Floating Circle Shape 1 */}
      <FloatingIcon
        position={{ top: "25%", right: "25%" }}
        size="4rem"
        animation="slow"
        icon="circle"
      />

      {/* Floating Circle Shape 2 */}
      <FloatingIcon
        position={{ bottom: "33.333%", left: "33.333%" }}
        size="3rem"
        animation="medium"
        icon="circle"
      />

      {/* Floating Document Icon 2 */}
      <FloatingIcon
        position={{ top: "50%", right: "3rem" }}
        size="2.25rem"
        animation="slow-delayed"
        icon="clipboard"
      />

      {/* Floating Star/Medal Icon */}
      <FloatingIcon
        position={{ bottom: "5rem", left: "25%" }}
        size="2.5rem"
        animation="medium"
        icon="star"
      />
    </div>
  );
}
