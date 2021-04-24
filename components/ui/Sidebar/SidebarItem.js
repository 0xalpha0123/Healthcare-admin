import { Box, Card, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles({
  sidebarItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#3769B0', color: 'white', transition: '0.3s' },
  },
  sidebarItemActive: { backgroundColor: '#3769B0', color: 'white' },
  icon: {
    fontSize: '40px',
    textAlign: 'center',
  },
});

function SidebarItem({ currentUrl, icon, label, url }) {
  const classes = useStyles();
  const sidebarClass = `${classes.sidebarItem} ${
    url === currentUrl ? classes.sidebarItemActive : ''
  }`;
  return (
    <Box my={3}>
      <Link href={url}>
        <Card className={sidebarClass}>
          <Box my={1} display="flex" justify-content="center" className={classes.icon}>
            {icon}
          </Box>
          <Box my={1}>
            <Typography align="center">{label}</Typography>
          </Box>
        </Card>
      </Link>
    </Box>
  );
}

export default SidebarItem;
