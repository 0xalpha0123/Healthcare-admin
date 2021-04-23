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
          <Box display="flex" justify-content="center" my={1}>
            <img alt={label} src={image} className="MenuItem__image" />
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
