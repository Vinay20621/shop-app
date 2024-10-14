import React from "react";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function OfferSection({ title, products }) {
  return (
    <div className="offer-section mr-4 m-4 p-4">
      <div className="flex justify-between items-center mb-4">
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

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "10px 0",
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: "start",
              marginRight: '10px',
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default OfferSection;
