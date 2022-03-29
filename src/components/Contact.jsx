import { Card, Box, Typography, Link } from "@material-ui/core";

import { GitHub, LinkedIn } from "@mui/icons-material";

export const Contact = () => {
  return (
    <Box display="inline-block" margin="3rem" width={450}>
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
        <Box
          display="flex"
          justifyContent="flex-end"
          gridGap="0.5rem"
          sx={{ padding: "1.5rem" }}
        >
          <Link href="https://github.com/AltaraceO" target="_blank">
            <GitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ori-a-3571a01a7/"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </Box>
      </Card>
    </Box>
  );
};
