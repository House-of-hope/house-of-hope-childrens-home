import Link from "next/link";
import Image from "next/image";
import { getChildren } from "@/lib/contentful";
import { kids as staticKids } from "../../data/kids";

export const metadata = {
  title: "Sponsor a Child — House of Hope",
  description: "Meet the children at House of Hope in Likoni and sponsor one today. Each child has a unique story and dreams for their future. Support their education and well-being.",
  openGraph: {
    title: "Sponsor a Child — House of Hope",
    description: "Meet the children at House of Hope and sponsor one today. Support their education and well-being.",
    url: "/kids",
    type: "website",
  },
};

export default async function KidsPage() {
  // Fetch from Contentful (falls back to empty array if not configured)
  const contentfulKids = await getChildren();
  
  // Use Contentful data if available, otherwise use static data
  const kids = contentfulKids.length > 0 ? contentfulKids : staticKids;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">Meet Our Children</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          These are some of the children who call House of Hope home — click any profile to learn more and sponsor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kids.map((kid) => (
          <article key={kid.id} className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                {kid.image ? (
                  <Image 
                    src={kid.image} 
                    alt={`${kid.name} from House of Hope`} 
                    width={80} 
                    height={80} 
                    className="object-cover" 
                    unoptimized 
                    priority 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-800">{kid.name}, <span className="text-sm font-medium text-gray-500">{kid.age}</span></h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{kid.bio}</p>
              </div>
            </div>

            <div className="mt-4">
              <Link href={`/kids/${kid.id}?action=sponsor`} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition w-full inline-block text-center">Sponsor</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}