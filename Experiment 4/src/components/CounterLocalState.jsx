import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <Box
      sx={{
        backgroundColor: "#f6e6ea", // 🌸 soft blush pink
        borderLeft: "6px solid #d89aa6",
        borderRadius: "16px",
        padding: 3,
        marginBottom: 3,
        boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "16px", color: "#4a2c2a" }}>
        {cno} : Local State Count: {count}
      </h3>

      <Button
        variant="contained"
        onClick={increaseCount}
        sx={{
          marginRight: 1.5,
          backgroundColor: "#ec4899",
          "&:hover": { backgroundColor: "#db2777" },
        }}
      >
        Increase
      </Button>

      <Button
        variant="outlined"
        onClick={decreaseCount}
        sx={{
          borderColor: "#ec4899",
          color: "#9d174d",
          "&:hover": {
            borderColor: "#db2777",
            backgroundColor: "#fce7f3",
          },
        }}
      >
        Decrease
      </Button>
    </Box>
  );
}
