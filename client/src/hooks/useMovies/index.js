import { useState, useCallback } from "react"
import { MAX_SELECTED_MOVIES } from "../../const"

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([])
  const selectMovie = useCallback(
    (movie) => {
      const length = selectedMovies.length
      const isNewMovies = !selectedMovies.find(({ id }) => id === movie.id)
      if (isNewMovies && length < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies])
      }
    },
    [selectedMovies]
  )
  const deleteMovie = useCallback(
    (movie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id))
    },
    [selectedMovies]
  )

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  }
}
