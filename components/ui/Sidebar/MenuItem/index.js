import { Box, Card, Container, Typography } from "@material-ui/core";

const MenuItem = ({ item, url, label, image, activeUrl }) => (
  <Box item className="MenuItem__buttonWrapper">
    <a href={url}>
      <Card
        className={`MenuItem__button ${
          activeUrl === url ? "MenuItem__button_active" : ""
        }`}
      >
        <Container>
          <Box my={2}>
            <img alt={label} src={image} />
          </Box>
          <Box my={1}>
            <Typography align="center">{label}</Typography>
          </Box>
        </Container>
      </Card>
    </a>
  </Box>
);

export default MenuItem;
