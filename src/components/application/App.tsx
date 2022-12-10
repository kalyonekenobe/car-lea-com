import React, {FC} from 'react';
import '../../styles/application/app.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {Home} from "../home/Home";
import {Contacts} from "../contacts/Contacts";
import {Cars} from "../cars/Cars";

const App: FC = () => {
  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<Home />} />
          <Route path={'/cars/*'} element={<Cars />} />
          <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
