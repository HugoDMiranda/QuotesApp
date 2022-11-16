import "./App.css";
import React from "react";
import Buttons from "./componentes/buttons.js";
import Social from "./componentes/social";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [colors, setColors] = useState("white");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);

      let randIndex = Math.floor(Math.random() * data.length);

      setRandomQuote(data[randIndex]);
    }

    fetchData();
  }, []);

  const getNewQuote = () => {
    var colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randColorIndex = Math.floor(Math.random() * colors.length);
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
    setColors(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: colors }}>
      <div className="container quote">
        <div className="card">
          {/* <div className="card-header">Where</div> */}
          <div className="card-body">
            <h5 className="card-title">{`"${randomQuote.text}"`}</h5>
            <p className="card-text">{randomQuote.author || "No author"}</p>
            <div className="container click">
              <div className="click social">
                <Social
                  link={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp"
                  }
                  icons="bi bi-twitter s btn btn-info"
                />
                <Social
                  icons="bi bi-reply-fill s btn btn-info"
                  link={
                    "https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAristotle%26content%3DThere%2Bis%2Bonly%2Bone%2Bway%2Bto%2Bavoid%2Bcriticism%253A%2Bdo%2Bnothing%252C%2Bsay%2Bnothing%252C%2Band%2Bbe%2Bnothing.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
                  }
                />
              </div>

              <div>
                <Buttons click={getNewQuote} boton="btn btn-primary boton" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
