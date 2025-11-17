import { useState } from 'react'
import './App.css'
import SuperHero from './components/superhero';

function App() {
  const supersData = [
  {
    name: "Flash",
    description: "Hi, I am Flash and there is no one as fast as me",
    likes: 0,
    color: "warning",
  },
  {
    name: "Batman",
    description: "I am Batman. Prep time solves everything.",
    likes: 3,
    color: "dark",
  },
  {
    name: "Wonder Woman",
    description: "Truth, compassion, and a very shiny lasso.",
    likes: 5,
    color: "primary",
  },
  {
    name: "Superman",
    description: "Up, up, and away.",
    likes: 2,
    color: "info",
  },
];

  return (
    <>
    <SuperHero/>
    </>
  )
}

export default App
