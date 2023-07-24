import { getCharacters } from "./services";
async function fetchCharacters() {
  const response = await getCharacters();

  return response;
}

export default async function Character() {
  const characters = await fetchCharacters();
  console.log(characters);
  return <div>{JSON.stringify(characters)}</div>;
}
