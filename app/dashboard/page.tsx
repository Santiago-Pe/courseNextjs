import Image from "next/image";

async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character/2");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <Image width={100} height={100} src={data.image} alt={data.name} />
    </main>
  );
}
