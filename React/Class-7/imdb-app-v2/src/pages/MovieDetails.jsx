import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMDB_READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';

const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount);
};

const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

const MovieDetails = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${IMDB_READ_ACCESS_TOKEN}`
            }
        })
            .then((res) => {
                setMovie(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }, [id]);

    if (isLoading) {
        return (
            <div className='flex flex-col items-center justify-center gap-4 py-16 text-gray-500'>
                <div className='size-10 rounded-full border-3 border-gray-200 border-t-amber-500 animate-spin' />
                <p>Loading movie details...</p>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className='flex flex-col items-center justify-center gap-4 py-16 text-gray-500'>
                <p className='text-lg font-medium text-gray-700'>Movie not found</p>
            </div>
        );
    }

    return (
        <div className='space-y-8'>
            {/* Hero with backdrop */}
            <section className='relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-sm'>
                {movie.backdrop_path && (
                    <img
                        className='absolute inset-0 w-full h-full object-cover opacity-40'
                        src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
                        alt=""
                    />
                )}
                <div className='absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-gray-900/40' />

                <div className='relative z-10 flex flex-col gap-8 p-6 sm:p-10 md:flex-row'>
                    <figure className='shrink-0 w-full max-w-[260px] mx-auto md:mx-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl'>
                        {movie.poster_path ? (
                            <img
                                className='w-full aspect-2/3 object-cover'
                                src={`${POSTER_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                            />
                        ) : (
                            <div className='flex items-center justify-center w-full aspect-2/3 bg-gray-800 text-gray-500 text-sm'>
                                No poster available
                            </div>
                        )}
                    </figure>

                    <div className='flex-1 text-white'>
                        <div className='flex flex-wrap items-center gap-3 mb-3'>
                            <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-400'>
                                {movie.status}
                            </span>
                            {movie.release_date && (
                                <span className='text-sm text-gray-300'>{movie.release_date}</span>
                            )}
                        </div>

                        <h1 className='mb-2 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight'>
                            {movie.title}
                        </h1>

                        {movie.original_title !== movie.title && (
                            <p className='mb-3 text-sm text-gray-400'>Original: {movie.original_title}</p>
                        )}

                        {movie.tagline && (
                            <p className='mb-5 text-base italic text-gray-300'>&ldquo;{movie.tagline}&rdquo;</p>
                        )}

                        <div className='flex flex-wrap items-center gap-3 mb-5'>
                            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold text-gray-900 bg-amber-400'>
                                ★ {movie.vote_average?.toFixed(1)}
                            </span>
                            <span className='text-sm text-gray-400'>({movie.vote_count?.toLocaleString()} votes)</span>
                            {movie.runtime && (
                                <span className='text-sm text-gray-300'>{formatRuntime(movie.runtime)}</span>
                            )}
                        </div>

                        {movie.genres?.length > 0 && (
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {movie.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className='px-3 py-1 rounded-full text-xs font-medium text-white bg-white/10 border border-white/20'
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {movie.homepage && (
                            <a
                                href={movie.homepage}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block px-5 py-2.5 rounded-full text-sm font-medium text-gray-900 bg-white no-underline transition-colors hover:bg-amber-400'
                            >
                                Visit Official Site
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Overview */}
            {movie.overview && (
                <section className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm'>
                    <h2 className='mb-4 text-xl font-bold text-gray-900'>Overview</h2>
                    <p className='text-base leading-relaxed text-gray-600'>{movie.overview}</p>
                </section>
            )}

            {/* Details grid */}
            <section className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm'>
                <h2 className='mb-6 text-xl font-bold text-gray-900'>Details</h2>
                <dl className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5'>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>Budget</dt>
                        <dd className='text-sm font-medium text-gray-900'>{formatCurrency(movie.budget)}</dd>
                    </div>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>Revenue</dt>
                        <dd className='text-sm font-medium text-gray-900'>{formatCurrency(movie.revenue)}</dd>
                    </div>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>IMDb ID</dt>
                        <dd className='text-sm font-medium text-gray-900'>{movie.imdb_id || 'N/A'}</dd>
                    </div>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>Original Language</dt>
                        <dd className='text-sm font-medium text-gray-900 uppercase'>{movie.original_language || 'N/A'}</dd>
                    </div>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>Origin Country</dt>
                        <dd className='text-sm font-medium text-gray-900'>
                            {movie.origin_country?.join(', ') || 'N/A'}
                        </dd>
                    </div>
                    <div>
                        <dt className='mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400'>Popularity</dt>
                        <dd className='text-sm font-medium text-gray-900'>{movie.popularity?.toFixed(1)}</dd>
                    </div>
                </dl>
            </section>

            {/* Production */}
            {(movie.production_companies?.length > 0 || movie.production_countries?.length > 0) && (
                <section className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm'>
                    <h2 className='mb-6 text-xl font-bold text-gray-900'>Production</h2>

                    {movie.production_companies?.length > 0 && (
                        <div className='mb-6'>
                            <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400'>Companies</h3>
                            <div className='flex flex-wrap gap-3'>
                                {movie.production_companies.map((company) => (
                                    <div
                                        key={company.id}
                                        className='flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-gray-50'
                                    >
                                        {company.logo_path && (
                                            <img
                                                className='h-6 w-auto object-contain'
                                                src={`${POSTER_BASE_URL}${company.logo_path}`}
                                                alt={company.name}
                                            />
                                        )}
                                        <span className='text-sm font-medium text-gray-900'>{company.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {movie.production_countries?.length > 0 && (
                        <div>
                            <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400'>Countries</h3>
                            <div className='flex flex-wrap gap-2'>
                                {movie.production_countries.map((country) => (
                                    <span
                                        key={country.iso_3166_1}
                                        className='px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200'
                                    >
                                        {country.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* Spoken Languages */}
            {movie.spoken_languages?.length > 0 && (
                <section className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm'>
                    <h2 className='mb-4 text-xl font-bold text-gray-900'>Spoken Languages</h2>
                    <div className='flex flex-wrap gap-2'>
                        {movie.spoken_languages.map((lang) => (
                            <span
                                key={lang.iso_639_1}
                                className='px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-amber-50 border border-amber-200'
                            >
                                {lang.english_name}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default MovieDetails
