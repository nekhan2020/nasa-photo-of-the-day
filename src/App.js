import React, { useState, useEffect } from "react";
import "./App.css";
import Nasapost from "./components/NasaPost";
import NavBar from "./components/NavBar";
import axios from "axios";
import { BASE_URL, API_KEY } from "./resources/apiInfo";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";
import Style from "styled-components";

function App() {
  const [media, setMedia] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();
  const [link, setLink] = useState();
  const [author, setAuthor] = useState();

  const StyledBody = Style.div`
  background: ${(props) => props.theme.backgroundColor}

`;
  useEffect(() => {
    axios
      // .get("#")
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setMedia(res.data.media_type);
        setDate(res.data.date);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
        setLink(res.data.url);
        setAuthor(res.data.copyright);
      })
      .catch((error) => {
        console.error(`this is the error coming from axios: ${error} `);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StyledBody>
        <div className="App">
          <NavBar></NavBar>
          <Nasapost
            date={date}
            title={title}
            media={media}
            explanation={explanation}
            author={author}
            link={link}
          ></Nasapost>
        </div>
      </StyledBody>
    </ThemeProvider>
  );
}

export default App;
