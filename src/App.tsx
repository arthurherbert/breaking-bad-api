import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HeaderComponent } from "components/header/header.component";
import { NotFoundContainer } from "pages/not-found/not-found.container";
import { HomeContainer } from "pages/home/home.container";
import { SuggestionsContainer } from "pages/suggestions/suggestions.container";
import { EpisodesContainer } from "pages/episodes/episodes.container";

// Main State
export interface AppState {
  filterQuery: string;
}
type ContextType = [AppState, React.Dispatch<React.SetStateAction<AppState>>];

const initialState = {
  filterQuery: ""
};

// Main Context
export const AppContext = React.createContext<ContextType>([
  initialState,
  () => {}
]);

const Provider: React.FC = props => {
  const [state, setState] = useState<AppState>(initialState);
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

// Main Component
export const App = () => {
  return (
    <Router>
      <Provider>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/suggestions/" component={SuggestionsContainer} />
          <Route path="/episodes/" component={EpisodesContainer} />
          <Route component={NotFoundContainer} />
        </Switch>
      </Provider>
    </Router>
  );
};
