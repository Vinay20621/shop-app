import React from "react";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; 


function OfferSection({ title, products }) {
  return (
    <div className="offer-section p-4">
      <div className="flex justify-between items-center mb-4 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(90deg, rgba(171, 46, 106, 0.8) 0%, rgba(157, 39, 96, 0.8) 44%, rgba(88, 24, 99, 0.8) 77%)",
            color: "white",
            paddingLeft: "50px",
            paddingRight: "50px",
            borderRadius: "50px",
          }}
        >
          More
        </Button>
      </div>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OfferSection;