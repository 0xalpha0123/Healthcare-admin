import { Box, Card, Container, Typography } from '@material-ui/core';

const MenuItem = ({ currentUrl, image, label, url }) => (
  <Box className="MenuItem__buttonWrapper">
    <a href={url}>
      <Card
        className={`MenuItem__button ${
          currentUrl === url ? 'MenuItem__button_active' : ''
        }`}
      >
        <Container>
          <Box my={1} display="flex" justify-content="center">
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
