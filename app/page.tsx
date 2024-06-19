import Image from 'next/image';

// import connectDB from '@/config/database';
// console.log(connectDB());

const fetchAnimals = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/animals');
    const animalRes = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return animalRes;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const favAnimals = await fetchAnimals();
  // console.log(favAnimals);
  return (
    <main>
      <h1 className="text-center text-5xl mt-6">My Favorite Animals</h1>
      <div className="max-w-7xl mx-auto bg-[url('/wood-texture.jpg')] bg-cover p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favAnimals.map((animal: any) => (
            <div
              key={animal._id}
              className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={animal.image}
                  width={400}
                  height={0}
                  alt={animal.name}
                />
              </div>
              <div className="p-4 mt-4">
                <h3 className=" font-extrabold text-2xl mb-2 text-green-500">
                  {animal.name}
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Description:</span>{' '}
                  {animal.description}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Male Name:</span>{' '}
                  {animal.male_name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Female Name:</span>{' '}
                  {animal.female_name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Offspring Name:</span>{' '}
                  {animal.offspring_name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Litter:</span> {animal.litter}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Natural Enemy:</span>{' '}
                  {animal.natural_enemy}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Trophic Level:</span>{' '}
                  {animal.diet}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Life Span:</span>
                  {animal.life_span} years
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">
                    Geographic Distribution:
                  </span>{' '}
                  {animal.geographic_location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
