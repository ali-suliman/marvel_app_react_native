import CryptoJS from "crypto-js"
import { API_KEY } from "@env"
import { PRIVATE_KEY } from "@env"

const ts = new Date().getTime()
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + API_KEY).toString()

export const fetchAllCharacters = async () => {
  const charactersURL = `https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=1311&ts=${ts}&apikey=${API_KEY}&hash=${hash}`

  const res = await fetch(charactersURL, { method: "GET" })
  const data = await res.json()

  return data
}

export const fetchCharacter = async (ID) => {
  const characterURL = `https://gateway.marvel.com:443/v1/public/characters/${ID}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`

  const res = await fetch(characterURL, { method: "GET" })
  const data = await res.json()

  return data
}
