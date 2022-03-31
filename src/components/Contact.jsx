import { Card, Box, Typography, Link, Divider } from "@material-ui/core";

import { GitHub, LinkedIn } from "@mui/icons-material";

export const Contact = () => {
  return (
    <Box display="inline-block" margin="3rem" width={450}>
      <Card>
        <Box sx={{ m: 2 }}>
          <Typography variant="h4" component="h1">
            Get in touch!
          </Typography>
        </Box>
        <Divider light />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>Phone Number</Typography>
          <Link href="tel:+972-52-678-7457">052-678-7457</Link>
        </Box>
        <Divider light />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>eMail</Typography>
          <Link href="mailto:orialtarace@gmail.com">orialtarace@gmail.com</Link>
        </Box>
        <Divider light />
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
