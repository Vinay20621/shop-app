import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        maxHeight: 505,
        borderRadius: 0,
        border: "1px solid #C6C5C5",
        boxShadow: 0,
      }}
    >
      <div style={{ width: '350px', height: '350px', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          sx={{
            height: 'auto',
            width: 'auto%',
            objectFit: 'cover',  
          }}
          image={`/images/${product.img}`}
          title={product.name}
        />
      </div>

      <CardContent
        sx={{
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h6" component="div" align="center">
          <b>{product.name}</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "green" }} align="center">
          <b>{product.discount} off</b>
        </Typography>
      </CardContent>
    </Card>
  );
}
