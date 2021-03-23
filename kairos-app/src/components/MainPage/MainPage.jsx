import React, { useEffect, useContext } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
import "./MainPage.css";
import Ticker from "react-ticker";
import Artyom from "artyom.js";

class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  loadCommands() {
    let Artyom = this._artyom;

    return Artyom.addCommands([
      {
        indexes: ["Hi Siri", "Hi"],
        action: () => {
          Artyom.say(
            "Humans please don't hire this guy. Look at the name he gaved me"
          );
        },
      },
      {
        indexes: ["Who is Manuel ?"],
        action: () => {
          Artyom.say("Probably the best designer ever.");
        },
      },
      {
        indexes: ["I love you ?"],
        action: () => {
          Artyom.say("Fucking gay. Watch some lesbo video on pornhub");
          alert("FATTI NA SEGA CON DEI PORNO CON DELLE FIGHE RUSSE");
        },
      },
      {
        indexes: ["Generate reports of * of this year"],
        smart: true,
        action: (i, month) => {
          let year = new Date().getFullYear();

          Artyom.say(`Generating reports of ${month} ${year} `);

          Artyom.say(
            "Ready ! What were you expecting? write some code you lazy bear !"
          );
        },
      },
    ]);
  }
}

const Jarvis = new Artyom();

function MainPage() {
  const CommandsManager = new ArtyomCommandsManager(Jarvis);
  CommandsManager.loadCommands();
  console.log(CommandsManager);

  const startAssistant = () => {
    Jarvis.initialize({
      lang: "en-GB",
      debug: true,
      continuous: false,
      soundex: true,
      listen: true,
    })
      .then(() => {
        // Display loaded commands in the console
        // console.log(Jarvis.getAvailableCommands());
        // Jarvis.say("Welcome Manuel");
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen !", err);
      });
  };

  const stopAssistant = () => {
    Jarvis.fatality()
      .then(() => {
        console.log("Jarvis has been succesfully stopped");
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen neither!", err);
      });
  };

  return (
    <div className="main_page_container">
      <div className="text-center">
        <h1>Welcome to the main page</h1>
      </div>
      <Ticker>
        {({ index }) => (
          <>
            <span className="mr-3">#HireRichard</span>
            <span className="mr-3">#PleaseHashTagWork</span>
            <span className="mr-3">#MandeepHashTag</span>
            <span className="mr-3">#iCanCodeWithoutTyping</span>
            <span className="mr-3">#HireTheCoolestPersonInTheWorld</span>
            <span className="mr-3">#Richard takes shower twice a day</span>
            <img src="www.my-image-source.com" alt="" />
          </>
        )}
      </Ticker>
      {/* <p>{transcript ? transcript : "Start listening for transcirpt"}</p> */}
      {/* <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start listening
      </button> */}
      <button onClick={() => startAssistant()}>Start listening</button>
      <button onClick={() => stopAssistant()}>Start listening</button>
      {/* <button onClick={() => SpeechRecognition.stopListening()}>
        Start listening
      </button> */}
    </div>
  );
}

export default MainPage;
