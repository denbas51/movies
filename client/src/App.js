import CssBaseline from "@mui/material/CssBaseline"
import { Navigation } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Settings, Recommend } from "./pages"
import { Box, Container } from "@mui/material"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { HOST_URL } from "./config"

function App() {
  const client = new ApolloClient({
    uri: HOST_URL,
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
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
