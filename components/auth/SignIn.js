import { useTranslation } from "next-i18next";
import {
  Card,
  CardContent,
  TextField,
  Container,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

function SignIn() {
  const { t } = useTranslation("auth");
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box m={4}>
        <Card>
          <CardContent>
            <Typography variant="h4">
              <Box textAlign="center">{t("signingIn")}</Box>
            </Typography>
            <form>
              <Box my={2}>
                <TextField id={t("email")} label={t("email")} fullWidth />
              </Box>
              <Box my={2}>
                <TextField id={t("password")} label={t("password")} fullWidth />
              </Box>

              <Box textAlign="center" mt={4}>
                <Button variant="contained" color="primary">
                  {t("signIn")}
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default SignIn;
