import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Box,
  Typography,
  Paper,
} from "@mui/material";

export default function MuiForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.gender) newErrors.gender = "Select gender";
    if (!formData.agree) newErrors.agree = "Accept terms to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    /* 🌌 Dark Gradient Background */
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔥 Glass Card */}
      <Paper
        elevation={10}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(20,20,30,0.85)",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
          fontWeight="bold"
        >
          Create Account 🚀
        </Typography>

        {/* Name */}
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          variant="filled"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          InputProps={{ style: { background: "#1e293b", color: "white" } }}
          InputLabelProps={{ style: { color: "#94a3b8" } }}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          variant="filled"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          InputProps={{ style: { background: "#1e293b", color: "white" } }}
          InputLabelProps={{ style: { color: "#94a3b8" } }}
        />

        {/* Gender */}
        <FormControl error={!!errors.gender} sx={{ mt: 3 }}>
          <FormLabel sx={{ color: "#cbd5e1" }}>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio sx={{ color: "#22d3ee" }} />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio sx={{ color: "#22d3ee" }} />}
              label="Female"
            />
          </RadioGroup>

          <Typography color="error" fontSize={12}>
            {errors.gender}
          </Typography>
        </FormControl>

        {/* Checkbox */}
        <FormControlLabel
          sx={{ mt: 2 }}
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              sx={{ color: "#22d3ee" }}
            />
          }
          label="I accept the terms & conditions"
        />

        <Typography color="error" fontSize={12}>
          {errors.agree}
        </Typography>

        {/* Neon Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #22d3ee, #06b6d4)",
            boxShadow: "0 0 20px rgba(34,211,238,0.6)",
            "&:hover": {
              background: "linear-gradient(90deg, #06b6d4, #0891b2)",
            },
          }}
        >
          Register Now
        </Button>
      </Paper>
    </Box>
  );
}
