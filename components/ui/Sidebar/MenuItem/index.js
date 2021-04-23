import { Box, Card, Container, Typography } from "@material-ui/core";

const MenuItem = ({ item, activeUrl }) => (
  <Box item m={3}>
    <a href={item.url}>
      <Card
        className={`MenuItem__button ${
          activeUrl === item.url ? "MenuItem__button_active" : ""
        }`}
      >
        <Container>
          <Box my={2}>
            <img alt={item.label} src={item.imageUrl} />
          </Box>
          <Box my={1}>
            <Typography align="center">{item.label}</Typography>
          </Box>
        </Container>
      </Card>
    </a>
  </Box>
);

export default MenuItem;
