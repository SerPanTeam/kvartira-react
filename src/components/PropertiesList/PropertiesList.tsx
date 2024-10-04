import PropertyCard from "../PropertyCard/PropertyCard";
import RealEstateObject from "../../interfaces/RealEstateObject";
import Grid from "@mui/material/Grid";

const PropertiesList = ({ data }: { data: RealEstateObject[] }) => {
  return (
    <Grid container spacing={3}>
      {data.map((val) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            <PropertyCard
              title={val.title}
              description={val.description}
              imageUrl={val.images[0]}
              obj={val}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PropertiesList;
