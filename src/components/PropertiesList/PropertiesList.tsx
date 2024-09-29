import PropertyCard from "../PropertyCard/PropertyCard";
import RealEstateObject from "../../interfaces/RealEstateObject";

const PropertiesList = ({ data }: { data: RealEstateObject[] }) => {
  return (
    <>
      {data.map((val) => {
        return (
          <PropertyCard
            key={val.id}
            title={val.title}
            description={val.description}
            imageUrl={val.images[0]}
          />
        );
      })}
    </>
  );
};

export default PropertiesList;
