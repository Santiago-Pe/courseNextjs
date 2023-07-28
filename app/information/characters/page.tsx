import { getCharacters } from "./services";
import { Card } from "../../../components/Card";
async function fetchCharacters() {
  const response = await getCharacters();

  return response;
}

export default async function Characters() {
  const characters = await fetchCharacters();
  console.log(characters);
  return (
    <>
      {characters.map((character) => (
        <Card data={character} key={character.id} />
      ))}
    </>
  );
}
