import type { ReactNode } from "react";
import Footer from "./_components/footer";
import HeroBanner from "./_components/heroBanner";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="p-0 m-0">
      <div className="absolute top-0 left-0 right-0 min-h-screen -z-10">
        <HeroBanner
          imageUrl="/hero-banner.webp"
          title="Home Page"
          subtitle="The home page"
        />
      </div>
      <div
        className="relative z-10 mt-screen"
        style={{ marginTop: "var(--fd-nav-height)" }}
      >
        {children}
      </div>
      <Footer />
    </HomeLayout>
  );
}
