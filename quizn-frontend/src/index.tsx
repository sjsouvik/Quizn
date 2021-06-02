import { render } from "react-dom";

import App from "./App";

import "./index.css";

import QuizDataProvider from "./providers/QuizDataProvider/QuizDataProvider";
import AuthProvider from "./providers/AuthProvider/AuthProvider";

import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <AuthProvider>
    <QuizDataProvider>
      <Router>
        <App />
      </Router>
    </QuizDataProvider>
  </AuthProvider>,
  rootElement
);
