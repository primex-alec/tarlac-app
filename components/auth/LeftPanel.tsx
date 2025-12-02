import Image from "next/image";
import { FloatingIcon } from "./FloatingIcon";

export function LeftPanel() {
  return (
    <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-white dark:bg-zinc-900 flex-col items-start p-8">
      {/* Logos */}
      <div className="flex items-center gap-2 mb-8 w-full">
        <Image src="/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
        <Image src="/y.png" alt="Y Logo" width={48} height={48} className="object-contain" />
      </div>
      
      <div className="shrink-0 mb-1 w-full flex justify-center relative">
        {/* Floating elements around the image */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon
            position={{ top: "2rem", left: "2rem" }}
            size="2rem"
            animation="slow"
            icon="document"
            opacity="opacity-20 dark:opacity-10"
          />
          <FloatingIcon
            position={{ top: "1.5rem", right: "1.5rem" }}
            size="2.5rem"
            animation="medium"
            icon="star"
            opacity="opacity-20 dark:opacity-10"
          />
          <FloatingIcon
            position={{ bottom: "2rem", left: "1.5rem" }}
            size="2.25rem"
            animation="slow-delayed"
            icon="shield"
            opacity="opacity-20 dark:opacity-10"
          />
          <FloatingIcon
            position={{ bottom: "1.5rem", right: "2rem" }}
            size="2rem"
            animation="medium-delayed"
            icon="building"
            opacity="opacity-20 dark:opacity-10"
          />
          <FloatingIcon
            position={{ top: "50%", left: "1rem" }}
            size="1.5rem"
            animation="slow"
            icon="circle"
            opacity="opacity-30 dark:opacity-20"
          />
          <FloatingIcon
            position={{ top: "50%", right: "1rem" }}
            size="2rem"
            animation="medium"
            icon="circle"
            opacity="opacity-30 dark:opacity-20"
          />
        </div>

        <div className="relative z-10 depth-of-field-container">
          <Image
            src="/cy (2).png"
            alt="Profile"
            width={400}
            height={400}
            className="max-w-full max-h-[400px] object-contain relative z-10"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-4 italic">
            &quot;Building a better tomorrow for Tarlac, one system at a time.&quot;
          </blockquote>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
            — Gov. Christian Yap
          </p>
        </div>
      </div>
    </div>
  );
}
