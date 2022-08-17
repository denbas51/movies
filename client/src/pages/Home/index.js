import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { MovieCard, SelectedMoviesSection } from "../../components"
import { useQuery } from "@apollo/client"
import { MOVIES_QUERY } from "./queries"
import Pagination from "@mui/material/Pagination"
import { useState } from "react"
import { useMovies } from "../../hooks/useMovies"
import { FormattedMessage } from "react-intl"
import Filters from "../../components/Filters"

const Home = () => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  })
  const { selectedMovies, selectMovie, deleteMovie } = useMovies()

  const paginationHandler = (event, page) => {
    setPage(page)
  }

  if (error) {
    return "Error"
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            {loading && "Loading..."}
            {data && (
              <>
                <FormattedMessage id="section" />
                <Filters results={data.movies.results} />
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, marginTop: 2 }}>
              {loading && "Loading..."}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCard
                        movie={movie}
                        onCardSelect={selectMovie}
                        loading={loading}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box
              mt={2}
              pb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                count={500}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Home
