import { useState, useContext, useCallback } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemButton from "@mui/material/ListItemButton"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import { Hidden } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import { Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "@mui/material"
import { AppContext } from "../../context/appContext"
import { LOCALES } from "../../const"
import { FormattedMessage, useIntl } from "react-intl"
import RecommendIcon from "@mui/icons-material/Recommend"
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags"
import EmojiFlagsTwoToneIcon from "@mui/icons-material/EmojiFlagsTwoTone"

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const { state, dispatch } = useContext(AppContext)
  const intl = useIntl()

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: "setLocale",
      locale,
    })
  }, [])

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link component={RouterLink} to="settings">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={intl.messages.settings} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <RecommendIcon />
              </ListItemIcon>
              <ListItemText primary={intl.messages.recommend} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem button onClick={() => setLanguage(LOCALES.ENGLISH)}>
          <ListItemButton>
            <ListItemIcon>
              <EmojiFlagsIcon />
            </ListItemIcon>
            <ListItemText primary={"English"} />
          </ListItemButton>
        </ListItem>
        <ListItem button onClick={() => setLanguage(LOCALES.UKRAINIAN)}>
          <ListItemButton>
            <ListItemIcon>
              <EmojiFlagsTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={"Українська"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", flexGrow: 1 }}
            >
              <FormattedMessage id="recommendations" />
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              sx={{ my: 2, color: "white" }}
              disabled={state.locale === LOCALES.ENGLISH}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              En
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              sx={{ my: 2, color: "white" }}
              disabled={state.locale === LOCALES.UKRAINIAN}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              Укр
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="settings" />
            </Button>
          </Box>
          <Button component={RouterLink} to="login" color="inherit">
            <FormattedMessage id="login" />
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  )
}

export default Navigation
