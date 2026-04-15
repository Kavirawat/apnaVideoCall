import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function SignIn() {
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" sx={{ mt: 18, p: 5 }}>
        <Typography component="h1" variant="h4" align="center">
          Sign in
        </Typography>

        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="Enter your Email"
            label="Email"
            name="email"
            type="email"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="Enter your password"
            label="Password"
            name="password"
            type="password"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
            required
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Sign In
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default SignIn;
