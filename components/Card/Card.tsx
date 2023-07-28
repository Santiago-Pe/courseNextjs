import Image from "next/image";
import "./Card.css";

// El card data lo dejamos aca porque solo se va a usar aca. Caso contrario ira en modelsz
type CardData = {
  name: string;
  type?: string;
  created: string;
  image?: string;
};

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formatedType = data.type;
  formatedType ||= "Note type";
  return (
    <article className="Card">
      <p>Name: {data.name}</p>
      <p>Type: {formatedType}</p>
      <p>Created: {data.created}</p>
      {data.image && (
        <Image width={100} height={100} src={data.image} alt={data.name} />
      )}
    </article>
  );
}

export default Card;
