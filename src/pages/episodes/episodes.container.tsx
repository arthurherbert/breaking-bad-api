import React, { useState, useEffect } from "react";
import "./episodes.styles.scss";
import { getEpisodes } from "service";

interface Episode {
  episode_id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: Array<string>;
}

export const EpisodesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useEffect(() => {
    setLoading(true);
    getEpisodes()
      .then(response => {
        setLoading(false);
        setEpisodes(response.data);
      })
      .catch(() => {
        setLoading(false);
        alert("Ocorreu um problema ao retornar os personagens");
      });
  }, []);

  return (
    <div className="episodes">
      <div className="l-container">
        <span>Episódios</span>
      </div>
      <div className="episodes__list">
        {loading === false ? (
          episodes.map((episode, index) => {
            return (
              <div className="episode">
                <div className="episode__info">
                  <div className="episode__title">{episode.title}</div>
                  <div className="episode__season-info">
                    Temporada {episode.season} - Episódio {episode.episode}
                  </div>
                </div>
                <div className="episode__date">
                  Data de estreia: {episode.air_date}
                </div>
                <div className="episode__characters">
                  Personagens: {episode.characters.join(", ")}
                </div>
              </div>
            );
          })
        ) : (
          <span>Carregando episódios...</span>
        )}
      </div>
    </div>
  );
};
