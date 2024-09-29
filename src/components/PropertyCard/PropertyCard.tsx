import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import RealEstateObject from "../../interfaces/RealEstateObject";
import { formatPrice } from "../../utils/formatPrice";

interface PropertyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  obj: RealEstateObject;
}

const PropertyCard = ({
  title,
  description,
  imageUrl,
  obj,
}: PropertyCardProps) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" sx={{ color: "gray" }}>
              №: {obj.id}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ color: "green" }}>
              {formatPrice(obj.price)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ textTransform: "uppercase" }}
      >
        {obj.type} {obj.category}
      </Typography>

      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={description}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LocationOnIcon sx={{ color: "primary.main", mr: 1 }} />
        <Typography variant="body2">
          {obj.location["sub-locality-name"]}, {obj.location.address}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PhoneIphoneIcon sx={{ color: "primary.main", mr: 1 }} />
        <Typography variant="body2">
          {obj["sales-agent"].phone}, {obj["sales-agent"].name}
        </Typography>
      </Box>
    </Card>
  );
};

export default PropertyCard;
