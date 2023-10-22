import { API_KEY,baseUrl } from "./constants/Constants";
export const original = `${baseUrl}/movie/popular?api_key=${API_KEY}`
export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Romance =`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`