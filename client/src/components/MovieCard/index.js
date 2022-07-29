import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"

import { Skeleton } from "@mui/material"

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}))

const PlusIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, .6)",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
}))

const MovieCard = ({ movie, onCardSelect, isPreviewMode, loading }) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        {!loading ? (
          <CardMedia
            component="img"
            height="250"
            image={movie.image}
            alt={movie.title}
          />
        ) : (
          <Skeleton variant="rectangular" height={250} />
        )}
        {!isPreviewMode && !loading && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddBoxOutlinedIcon sx={{ fontSize: 80 }} />
          </PlusIcon>
        )}
      </Box>

      <CardInfo>
        {!loading ? (
          <Typography variant="h6" gutterBottom component="div">
            {movie.title}
          </Typography>
        ) : (
          <Skeleton variant="rectangular" />
        )}
        {!loading ? (
          <Typography mb={0} variant="subtitle1" gutterBottom component="div">
            {movie.releaseDate}
          </Typography>
        ) : (
          <Skeleton variant="rectangular" mb={0} gutterBottom />
        )}
      </CardInfo>
    </Card>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
  isPreviewMode: PropTypes.bool,
}

export default MovieCard
