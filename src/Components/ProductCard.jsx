import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: 0,
        border: "1px solid #C6C5C5",
        boxShadow: 0,
        marginRight: 3,
        marginLeft:3,
      }}
    >
      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <CardMedia
          component="img"
          sx={{
            height: "auto",
            width: "100%",
            objectFit: "cover",
          }}
          image={`/images/${product.img}`}
          title={product.name}
        />
      </div>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
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
