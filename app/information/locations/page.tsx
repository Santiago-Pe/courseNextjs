import { getLocation } from "./services";
import { Card } from "../../../components/Card";
async function fetchLocations() {
  const response = await getLocation();

  return response;
}

export default async function Locations() {
  const locations = await fetchLocations();
  console.log(locations);
  return (
    <>
      {locations.map((location) => (
        <Card data={location} key={location.id} />
      ))}
    </>
  );
}
