import React, { useState, useContext, createContext, useEffect } from "react"

const CharacterContext = createContext()

export const CharacterProcider = ({ children }) => {
  const [characterData, setCharacterData] = useState({
    loading: true,
    error: false,
    data: null,
    id: null,
  })
  const [characterId, setCharacterId] = useState({ id: 1 })

  return (
    <CharacterContext.Provider value={{ characterData, setCharacterId }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const GetCharacterData = () => {
  const { characterData, setCharacterId } = useContext(CharacterContext)
  return characterData
}
