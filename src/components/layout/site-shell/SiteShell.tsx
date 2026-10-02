import { Navbar } from "@/components/layout/navbar/Navbar";
import { MobileNav } from "@/components/layout/mobile-nav/MobileNav";
import { Footer } from "@/components/layout/footer/Footer";



export function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-ink text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-[1400px] px-4 pb-28 pt-6 md:px-8 lg:pb-10">
                {children}
            </main>
            <Footer />
            <MobileNav />
        </div>
    );
}