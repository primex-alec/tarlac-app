"use client";

import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/reusable/ThemeToggle";
import { LoginForm } from "@/components/auth/LoginForm";
import { LeftPanel } from "@/components/auth/LeftPanel";
import { BackgroundDecorations } from "@/components/auth/BackgroundDecorations";

export default function Home() {
  const router = useRouter();

  async function handleLogin(email: string, password: string) {
    // TODO: Replace with actual API call to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store mock session (replace with proper auth)
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to dashboard
    router.push("/settings/user-management");
  }

  return (
    <main
      className="min-h-dvh flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/b1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/60 to-black/50"></div>

      {/* Floating Elements */}
      <BackgroundDecorations />

      {/* Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative z-20">
        {/* Left Column - Image */}
        <LeftPanel />

        {/* Right Column - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm relative">
          {/* Theme Toggle - Top Right */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <ModeToggle />
          </div>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </main>
  );
}
