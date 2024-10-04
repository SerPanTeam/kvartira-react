import { Card, Typography, CardMedia, Box, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ViberIcon from "@mui/icons-material/LocalPhone"; // Нет официальной иконки Viber, можно использовать замену

import RealEstateObject from "../../interfaces/RealEstateObject";
import { formatPrice } from "../../utils/formatPrice";

interface PropertyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  obj: RealEstateObject;
}

const PropertyCard = ({
  // title,
  description,
  imageUrl,
  obj,
}: PropertyCardProps) => {
  const phoneNumber = obj["sales-agent"].phone.replace(/[^\d]/g, "");

  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 470 },
        position: "relative",
        mx: "auto",
        mb: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ "&::first-letter": { textTransform: "uppercase" } }}
      >
        {obj.category}
        {obj.rooms ? ", " + obj.rooms + " к." : ""}

        {obj.floor
          ? ", " + obj.floor + "/" + obj["floors-total"] + " эт."
          : obj["floors-total"]
          ? ", " + obj["floors-total"] + " эт."
          : ""}

        {obj.area ? ", " + obj.area.value + " м²" : ""}
        {obj["lot-area"] ? ", " + obj["lot-area"].value + " сот." : ""}
      </Typography>
      {/* Контейнер для изображения */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            height: { xs: 300, sm: 300, md: 400 },
            objectFit: "cover",
          }}
          image={imageUrl}
          alt={description}
        />

        {/* Полупрозрачный блок с номером и ценой сверху */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: { xs: "5px", sm: "10px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              flex: 1,
              textAlign: "left",
              paddingRight: "10px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              maxWidth: "50%",
            }}
          >
            №: {obj.id}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              flex: 1,
              textAlign: "right",
              paddingLeft: "10px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              maxWidth: "50%",
            }}
          >
            {formatPrice(obj.price)}
          </Typography>
        </Box>
      </Box>

      {/* Местоположение */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2, px: 2 }}>
        <LocationOnIcon sx={{ color: "primary.main", mr: 1 }} />
        <Typography variant="body2">
          {obj.location["sub-locality-name"]}, {obj.location.address}
          {obj.location.zk ? ", ЖК " + obj.location.zk : ""}
        </Typography>
      </Box>

      {/* Кнопка для звонка */}
      <Box sx={{ mt: 2, px: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PhoneIcon />}
          component="a"
          href={`tel:${obj["sales-agent"].phone}`}
          fullWidth
          sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
        >
          {obj["sales-agent"].phone}, {obj["sales-agent"].name}
        </Button>
      </Box>

      {/* Кнопки для мессенджеров */}
      <Grid container spacing={1} sx={{ mt: 2, px: 2, pb: 2 }}>
        {[
          {
            color: "secondary",
            href: `viber://chat?number=%2B${phoneNumber}`,
            icon: ViberIcon,
            label: "Viber",
          },
          {
            color: "success",
            href: `https://wa.me/${phoneNumber}`,
            icon: WhatsAppIcon,
            label: "WhatsApp",
            target: "_blank",
          },
          {
            color: "info",
            href: `https://t.me/+${phoneNumber}`,
            icon: TelegramIcon,
            label: "Telegram",
            target: "_blank",
          },
        ].map((messenger, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              color={messenger.color as "primary" | "secondary" | "success" | "info"}
              //{messenger.color}
              component="a"
              href={messenger.href}
              target={messenger.target}
              sx={{
                width: "100%",
                minWidth: 0,
                padding: { xs: "6px 0", sm: "8px 0" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
              }}
            >
              <messenger.icon
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                  lineHeight: 1,
                  mt: { xs: "2px", sm: "4px" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {messenger.label}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default PropertyCard;
