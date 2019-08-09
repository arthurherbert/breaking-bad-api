import React, { useState } from "react";
import "./suggestions.styles.scss";
import { sendSuggestion } from "service";

export const SuggestionsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleClick = () => {
    if (author && message) {
      setLoading(true);
      sendSuggestion({
        author,
        message
      })
        .then(() => {
          alert("Sugestão enviada!");
          setLoading(false);
        })
        .catch(() => {
          alert("Falha ao enviar sugestão!");
          setLoading(false);
        });
    }
  };

  return (
    <div className="suggestions">
      <div className="l-container">
        <span>Envie sua sugestão</span>
      </div>
      <div className="suggestions__form">
        <input
          placeholder="Seu nome"
          className="suggestions__author"
          value={author}
          onChange={ev => setAuthor(ev.target.value)}
        />
        <textarea
          placeholder="Mensagem"
          className="suggestions__author"
          value={message}
          onChange={ev => setMessage(ev.target.value)}
        />
        {loading === false ? (
          <button disabled={!author || !message} onClick={handleClick}>
            Enviar sugestão
          </button>
        ) : (
          <span>Enviando...</span>
        )}
      </div>
    </div>
  );
};
