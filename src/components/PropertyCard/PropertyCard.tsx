import styles from "./PropertyCard.module.css";

// Определение интерфейса для `props`
interface PropertyCardProps {
  title: string; // Ожидается, что title будет строкой
  description: string; // Ожидается, что description будет строкой
  imageUrl: string; // Ожидается, что imageUrl будет строкой
}

// Компонент PropertyCard с использованием React.FC и типом PropertyCardProps
const PropertyCard = ({
  title,
  description,
  imageUrl,
}: PropertyCardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default PropertyCard;
