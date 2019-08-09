import axios from "axios";
const baseUrl = "https://www.breakingbadapi.com/api";

export const getCharacters = () => axios.get(`${baseUrl}/characters`);
export const getEpisodes = () => axios.get(`${baseUrl}/episodes`);
export const sendSuggestion = (body: { message: string; author: string }) =>
  axios.post(
    `https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions`,
    body
  );
