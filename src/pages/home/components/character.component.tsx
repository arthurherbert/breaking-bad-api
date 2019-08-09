import React from "react";
import { Tag } from "./tag.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface Character {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: "Alive" | "Deceased";
  nickname: string;
  appearance: Array<number>;
  portrayed: string;
}

export const Character: React.FC<{ character: Character }> = ({
  character
}) => {
  return (
    <div
      className="character"
      style={{
        backgroundImage: `url(${character.img})`
      }}
    >
      <Tag type={character.status} active={true}>
        {character.status === "Alive" ? "Vivo" : "Morto"}
      </Tag>
      <div className="character__info">
        <span className="character__name">{character.name}</span>
        <span className="character__birthday">
          <FontAwesomeIcon icon={faStar} color="#5d5d5d" size="xs" />
          {character.birthday}
        </span>
        <span className="character__occupation">
          {character.occupation.join(", ")}
        </span>
      </div>
    </div>
  );
};
