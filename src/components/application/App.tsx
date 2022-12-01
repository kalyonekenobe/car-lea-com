import React, {FC} from 'react';
import '../../styles/application/app.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {Home} from "../home/Home";

const App: FC = () => {
  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
