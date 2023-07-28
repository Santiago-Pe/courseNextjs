import { Routes } from "../models";
import Navigator from "../components/Navigator/Navigator";

export default function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty App</h1>
      <h2>What do yo want to see?</h2>

      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  );
}
