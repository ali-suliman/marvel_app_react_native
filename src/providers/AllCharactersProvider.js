import React, { useState, useContext, useEffect, createContext } from "react"
import { fetchAllCharacters } from "../shared/api/marvel_api"

const CharactersContext = createContext()

export const CharactersProvider = ({ children }) => {
  const [charactersData, setCharactersData] = useState({
    loading: true,
    error: false,
    data: null,
  })

  return (
    <CharactersContext.Provider value={{ charactersData, setCharactersData }}>
      {children}
    </CharactersContext.Provider>
  )
}

export const GetCharactersData = () => {
  const { charactersData, setCharactersData } = useContext(CharactersContext)

  // useEffect(() => fetchData(), [])

  const fetchData = async () => {
    try {
      const res = await fetchAllCharacters()
      setCharactersData((prevState) => ({
        ...prevState,
        loading: false,
        data: res,
      }))
    } catch (err) {
      setCharactersData((prevState) => ({
        ...prevState,
        loading: false,
        error: err,
      }))
    }
  }

  return charactersData
}

// import React, { useState, createContext, useContext } from "react"

// const CharactersContext = createContext()

// export const CharacterProvider = ({ children }) => {
//   const [characters, setCharacters] = useState({
//     data: {},
//     loading: true,
//     error: false,
//   })

//   return (
//     <CharactersContext.Provider value={{ characters }}>
//       {children}
//     </CharactersContext.Provider>
//   )
// }

// export const GetCharacters = () => {
//   const { characters } = useContext(CharactersContext)

//   return characters
// }
