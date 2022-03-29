import { Card, Box, Typography } from "@material-ui/core";

export const Contact = () => {
  return (
    <Box display="inline-block" width={450}>
      <Card>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>Phone Number</Typography>
          <Typography>052-6787456</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>eMail</Typography>
          <Typography>orialtarace@gmail.com</Typography>
        </Box>
        <Box>Social Media</Box>
      </Card>
    </Box>
  );
};
