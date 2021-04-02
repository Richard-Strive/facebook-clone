export class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  loadCommands() {
    let Artyom = this._artyom;

    return Artyom.addCommands([
      {
        indexes: ["Hi Arios", "Hi"],
        action: () => {
          Artyom.say(
            "Humans please don't hire this guy. Look at the name he gaved me"
          );
        },
      },
      {
        indexes: ["Search for *", "Search *"],
        smart: true,
        action: (i, name, setSearch) => {
          Artyom.say(`Searching for ${name}`);
          setSearch(name);
        },
      },
      {
        indexes: ["Read post"],
        action: (array) => {
          array.map((post) => Artyom.say(post));
        },
      },
    ]);
  }
}

export const stopAssistant = (Jarvis) => {
  Jarvis.fatality()
    .then(() => {
      console.log("Jarvis has been succesfully stopped");
    })
    .catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);
    });
};
