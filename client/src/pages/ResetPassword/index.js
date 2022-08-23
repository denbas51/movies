import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Snackbar from "@mui/material/Snackbar"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link as RouterLink } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { FormattedMessage, useIntl } from "react-intl"
import { useNavigate } from "react-router-dom"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        <FormattedMessage id="website" />
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

function ResetPassword() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const intl = useIntl()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleSubmit = (event) => {
    const auth = getAuth()

    event.preventDefault()
    const data = new FormData(event.currentTarget)

    sendPasswordResetEmail(auth, data.get("email"))
      .then(() => {
        console.log("Password reset email sent")
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setOpen(true)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage id="forgotPass" />
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={intl.messages.email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <FormattedMessage id="send" />
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{ flexGrow: 1 }}
                >
                  <Link href="#" variant="body2">
                    <FormattedMessage id="signUp" />
                  </Link>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Wrong email!!!
          </Alert>
        </Snackbar>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default ResetPassword
