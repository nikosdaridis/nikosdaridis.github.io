import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ColorPalOnboarding from "./pages/ColorPalOnboarding";

function setTitleAndFavicon(title, favicon) {
  let newTitle = document.createElement("title");
  newTitle.textContent = title;
  document.querySelector("head").appendChild(newTitle);

  let newFavicon = document.createElement("link");
  newFavicon.setAttribute("rel", "icon");
  newFavicon.setAttribute("href", favicon);
  document.querySelector("head").appendChild(newFavicon);
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage setTitleAndFavicon={setTitleAndFavicon} />}
        />
        <Route path="colorpal">
          <Route index element={<Navigate replace to="onboarding" />} />
          <Route
            path="onboarding"
            element={
              <ColorPalOnboarding setTitleAndFavicon={setTitleAndFavicon} />
            }
          />
          <Route path="*" element={<Navigate replace to="onboarding" />} />
        </Route>
        <Route
          path="*"
          element={<Homepage setTitleAndFavicon={setTitleAndFavicon} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
