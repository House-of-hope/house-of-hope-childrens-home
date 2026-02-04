import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKidById } from "../../../data/kids";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const kid = getKidById(params.id);
  if (!kid) return { title: 'Child not found' };

  return {
    title: `${kid.name} — House of Hope`,
    description: `${kid.name}, age ${kid.age} from ${kid.location}. ${kid.bio}`,
    openGraph: {
      title: `${kid.name} — House of Hope`,
      description: `${kid.name}, age ${kid.age} from ${kid.location}. ${kid.bio}`,
      images: [kid.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function KidProfile({ params }: Props) {
  const kid = getKidById(params.id);
  if (!kid) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow">
          <Image src={kid.image} alt={kid.name} width={500} height={500} className="object-cover w-full h-full" unoptimized priority />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-blue-800">{kid.name}</h1>
          <p className="text-gray-600 mt-1">Age {kid.age} • {kid.location}</p>

          <p className="mt-6 text-gray-700 leading-relaxed">{kid.bio} {""}
            She/he is part of our community and would appreciate your support to access schooling, healthcare, and mentorship programs.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href={`/?kid=${kid.id}#donate`} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold">Sponsor this child</Link>

            <Link href="/kids" className="px-4 py-3 rounded-full border border-gray-200 text-gray-700">Back to list</Link>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-blue-800">More about {kid.name}</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Hobbies: Drawing, sports, reading</li>
              <li>Favorite subject: English & Math</li>
              <li>Wish: To complete school and help others</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
