import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Rating,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState(4);
  const [agree, setAgree] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card sx={{ width: 380, borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Experiment–2 UI Components
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* TextField */}
          <TextField
            label="Enter Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />

          {/* Select */}
          <Select
            fullWidth
            displayEmpty
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <em>Select Course</em>
            </MenuItem>
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="ECE">ECE</MenuItem>
          </Select>

          {/* Rating */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Rate this UI</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </Box>

          {/* Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            }
            label="I agree to the terms"
            sx={{ mb: 2 }}
          />

          {/* Button */}
          <Button
            variant="contained"
            fullWidth
            endIcon={<SendIcon />}
            sx={{
              borderRadius: 3,
              py: 1.2,
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              fontWeight: "bold"
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
