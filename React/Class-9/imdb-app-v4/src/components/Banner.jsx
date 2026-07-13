import React, {useContext} from 'react'
import TodoContext from '../context/todo-context'

const Banner = () => {

  const { todos } = useContext(TodoContext);
  return (
    <section className="relative overflow-hidden rounded-2xl mb-10 px-6 py-14 sm:px-10 border border-gray-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-linear-to-br from-amber-50 via-white to-indigo-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(245,158,11,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="relative z-10 max-w-xl">
        <span className="inline-block mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100 border border-amber-200">
          Now Trending
        </span>
        <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
          Discover the World&apos;s
          <span className="block bg-linear-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Most Popular Movies
          </span>
        </h1>
        <p className="text-base leading-relaxed text-gray-600">
          Explore top-rated films, fresh releases, and fan favorites — all in one place.
        </p>
        <p>{ todos.toString() }</p>
      </div>
    </section>
  )
}

export default Banner
