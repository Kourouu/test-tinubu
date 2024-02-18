import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Autocomplete, TextField } from "@mui/material";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Autocomplete
          options={["yep", "nope"]}
          renderInput={() => <TextField></TextField>}
        ></Autocomplete>
      </div>
    </>
  );
}

export default App;
