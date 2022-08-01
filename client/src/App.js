import { useContext } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { Navigation } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Settings, Recommend } from "./pages"
import SignIn from "./pages/Login"
import { Box, Container } from "@mui/material"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client"
import { HOST_URL } from "./config"
import { AppContext } from "./context/appContext"

function App() {
  const { state } = useContext(AppContext)
  const httpLink = new HttpLink({ uri: HOST_URL })

  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers")
      ? operation.getContext().headers
      : {}

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    })
    return forward(operation)
  })

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recommend" element={<Recommend />} />
              <Route path="login" element={<SignIn />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
