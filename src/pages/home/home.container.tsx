import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "app";
import "./home.styles.scss";
import { Tag } from "./components/tag.component";
import { Character } from "./components/character.component";
import { getCharacters } from "service";

export const HomeContainer = () => {
  const [{ filterQuery }] = useContext(AppContext);
  const [filter, setFilter] = useState("both");
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Array<Character>>([]);

  // Reset alive/deceased filter when user filter by name
  useEffect(() => {
    setFilter("both");
  }, [filterQuery]);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then(response => {
        setLoading(false);
        setCharacters(response.data);
      })
      .catch(() => {
        setLoading(false);
        alert("Ocorreu um problema ao retornar os personagens");
      });
  }, []);

  const handleFilterClick = (clickedFilter: string) => setFilter(clickedFilter);
  const filteredCharacters = () =>
    characters.filter(
      character =>
        character.name.toLowerCase().includes(filterQuery.toLowerCase()) &&
        (filter === "both" || character.status === filter)
    );

  // Renders
  const renderFilters = () =>
    filterQuery === "" && (
      <div className="home__filters">
        <p>Filtre por:</p>
        <Tag
          onClick={handleFilterClick.bind(null, "Alive")}
          type="Alive"
          active={filter === "Alive"}
        >
          Vivo
        </Tag>
        <Tag
          onClick={handleFilterClick.bind(null, "Deceased")}
          type="Deceased"
          active={filter === "Deceased"}
        >
          Morto
        </Tag>
        <Tag
          onClick={handleFilterClick.bind(null, "both")}
          type="black"
          active={filter === "both"}
        >
          Todos
        </Tag>
      </div>
    );

  return (
    <div className="home">
      <div className="l-container">
        {filterQuery === "" ? (
          <span>Personagens</span>
        ) : (
          <span>Você pesquisou por "{filterQuery}"</span>
        )}
        {renderFilters()}
      </div>
      <div className="home__characters">
        {loading === false ? (
          filteredCharacters().map((character, index) => (
            <Character key={index} character={character} />
          ))
        ) : (
          <span>Carregando personagens...</span>
        )}
      </div>
    </div>
  );
};
