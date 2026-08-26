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
import useHttp from '../hooks/useHttp';
import { getMovie } from '../lib/apis';

const MovieDetailsPage = () => {
  const { movieId } = useParams()

  const { sendRequest, status, data: loadedMovie, error } = useHttp(getMovie, true);

  useEffect(() => {
    sendRequest(movieId);
  }, [movieId]);  

  if (status === 'pending') {
    return <Container maxWidth="lg" sx={{ py: 8 }}><Typography color="text.secondary">Loading movie details...</Typography></Container>
  }

  if (status === 'completed' && (!loadedMovie || loadedMovie.error)) {
    return <Container maxWidth="lg" sx={{ py: 6 }}><Alert severity="error" sx={{ mb: 2 }}>{error?.message || 'Movie not found.'}</Alert><Button component={RouterLink} to="/" startIcon={<ArrowBackRoundedIcon />}>Back to movies</Button></Container>
  }

  const rating = (loadedMovie && loadedMovie.rating?.toFixed?.(1)) || 'N/A'

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100%' }}>
      <Box sx={{ bgcolor: '#1f2533', color: 'common.white', py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Button component={RouterLink} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ color: 'common.white', mb: { xs: 1.5, md: 1.5 } }}>
            Back to movies
          </Button>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, md: 4 }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <Box component="img" src={loadedMovie.posterUrl} alt={`${loadedMovie.title} poster`} sx={{ display: 'block', width: { xs: 190, sm: 240 }, height: { xs: 285, sm: 360 }, objectFit: 'cover', borderRadius: 2, boxShadow: '0 16px 32px rgba(0,0,0,0.35)' }} />
            <Stack spacing={2} sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, lineHeight: 1.12 }}>{loadedMovie.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <StarRoundedIcon sx={{ color: '#f84464', fontSize: 28 }} />
                <Typography sx={{ fontWeight: 800, fontSize: '1.2rem' }}>{rating}/10</Typography>
                {loadedMovie.upvotes ? <Typography sx={{ color: 'rgba(255,255,255,0.75)' }}>({loadedMovie.upvotes.toLocaleString()} votes)</Typography> : null}
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                {(loadedMovie.genres ?? []).map((genre) => <Chip key={genre} label={genre} sx={{ bgcolor: 'rgba(255,255,255,0.14)', color: 'common.white', fontWeight: 600 }} />)}
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
          {loadedMovie.title} is a {loadedMovie.genres?.join(', ') || 'feature'} film. Explore the cast and reserve your seats for the big screen.
        </Typography>

        <Typography component="h2" variant="h4" sx={{ fontWeight: 800, color: '#1f2533', mb: 3 }}>Cast</Typography>
        {loadedMovie.cast?.length ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 2 }}>
            {loadedMovie.cast.map((member) => (
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
