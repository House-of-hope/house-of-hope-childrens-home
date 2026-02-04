import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery — House of Hope | Photo & Video Gallery",
  description: "Explore our photo and video gallery showcasing moments of joy, learning, growth, and transformation at House of Hope. See the impact of our programs and the children's stories.",
  openGraph: {
    title: "Gallery — House of Hope | Photo & Video Gallery",
    description: "Moments of joy, learning, growth, and transformation at House of Hope.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">Gallery</h1>
        <p className="text-gray-600 text-sm md:text-base mb-8 md:mb-10">
          Moments of joy, learning, growth, and transformation at House of Hope.
        </p>

        <GalleryClient />
      </div>
    </section>
  );
}
