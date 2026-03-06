import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import ProjectsSection from "@/components/projects-section";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";
import { getLatestPosts } from "@/lib/posts";

export default async function Home() {
  const latestPosts = await getLatestPosts(3);

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <section className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-300 sm:px-6 md:text-base lg:px-8">
          OpenPrinting develops IPP-based printing technology for Linux/Unix
          operating systems.
        </div>
      </section>
      <NewsSection posts={latestPosts} />
      <InfoSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
