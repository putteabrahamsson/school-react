import React, { useState, useContext } from "react";
import AddName from "../../components/addName";
import PrimaryButton from "../../components/buttons/primaryButton";
import DisplayName from "../../components/displayName";
import LoadJoke from "../../components/loadJokes";

const HomeScreen = () => {
  const themes = {
    noTap: {
      foreground: "orange",
      background: "blue",
    },
    afterTap: {
      foreground: "pink",
      background: "yellow",
    },
  };

  const ThemeContext = React.createContext(themes.noTap);

  const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        Themed button
      </button>
    );
  };

  const [data, setData] = useState();

  const getData = (obj) => setData(obj);

  return (
    <>
      <ThemeContext.Provider value={themes.afterTap}>
        <ThemedButton />
      </ThemeContext.Provider>

      <div>
        <PrimaryButton />
        <AddName passNumber={(value) => getData(value)} />
        <LoadJoke />
        {data && data.length > 0 ? <DisplayName obj={data} /> : null}
      </div>
    </>
  );
};

export default HomeScreen;
