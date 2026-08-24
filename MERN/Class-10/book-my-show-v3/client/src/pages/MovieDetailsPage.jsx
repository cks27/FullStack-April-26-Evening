import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router'
import axios from 'axios'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    const loadMovie = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await axios.get(`http://localhost:8080/movies/${movieId}`)
        if (isActive) setMovie(response.data.payload)
      } catch (requestError) {
        if (isActive) {
          setError(requestError.response?.data?.message ?? 'We could not load this movie. Please try again.')
        }
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    loadMovie()
    return () => { isActive = false }
  }, [movieId])

  if (isLoading) {
    return <Container maxWidth="lg" sx={{ py: 8 }}><Typography color="text.secondary">Loading movie details...</Typography></Container>
  }

  if (error || !movie) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ mb: 2 }}>{error || 'Movie not found.'}</Alert>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackRoundedIcon />}>Back to movies</Button>
      </Container>
    )
  }

  const rating = movie.rating?.toFixed?.(1) ?? movie.rating ?? 'N/A'

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100%' }}>
      <Box sx={{ bgcolor: '#1f2533', color: 'common.white', py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Button component={RouterLink} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ color: 'common.white', mb: { xs: 1.5, md: 1.5 } }}>
            Back to movies
          </Button>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, md: 4 }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <Box component="img" src={movie.posterUrl} alt={`${movie.title} poster`} sx={{ display: 'block', width: { xs: 190, sm: 240 }, height: { xs: 285, sm: 360 }, objectFit: 'cover', borderRadius: 2, boxShadow: '0 16px 32px rgba(0,0,0,0.35)' }} />
            <Stack spacing={2} sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, lineHeight: 1.12 }}>{movie.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <StarRoundedIcon sx={{ color: '#f84464', fontSize: 28 }} />
                <Typography sx={{ fontWeight: 800, fontSize: '1.2rem' }}>{rating}/10</Typography>
                {movie.upvotes ? <Typography sx={{ color: 'rgba(255,255,255,0.75)' }}>({movie.upvotes.toLocaleString()} votes)</Typography> : null}
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                {(movie.genres ?? []).map((genre) => <Chip key={genre} label={genre} sx={{ bgcolor: 'rgba(255,255,255,0.14)', color: 'common.white', fontWeight: 600 }} />)}
              </Stack>
              <Button variant="contained" size="large" sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, bgcolor: '#f84464', px: 4, fontWeight: 700, '&:hover': { bgcolor: '#d93452' } }}>
                Book tickets
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 800, color: '#1f2533', mb: 1 }}>About the movie</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 760, mb: 5 }}>
          {movie.title} is a {movie.genres?.join(', ') || 'feature'} film. Explore the cast and reserve your seats for the big screen.
        </Typography>

        <Typography component="h2" variant="h4" sx={{ fontWeight: 800, color: '#1f2533', mb: 3 }}>Cast</Typography>
        {movie.cast?.length ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 2 }}>
            {movie.cast.map((member) => (
              <Card key={`${member.name}-${member.alias}`} sx={{ borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <CardContent sx={{ textAlign: 'center', p: 2.5, '&:last-child': { pb: 2.5 } }}>
                  <Avatar src={member.profilePicture} alt={member.name} sx={{ width: 92, height: 92, mx: 'auto', mb: 1.5 }} />
                  <Typography sx={{ fontWeight: 700 }}>{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{member.alias}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : <Typography color="text.secondary">Cast details are not available for this movie.</Typography>}
      </Container>
    </Box>
  )
}

export default MovieDetailsPage
