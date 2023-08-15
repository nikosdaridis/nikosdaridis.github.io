import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ColorpalOnboarding from "./pages/ColorpalOnboarding";

function setTitleAndFavicon(title: string, favicon: string): void {
  let head = document.querySelector("head");
  let newTitle = document.createElement("title");
  let newFavicon = document.createElement("link");

  newTitle.textContent = title;
  newFavicon.setAttribute("rel", "icon");
  newFavicon.setAttribute("href", favicon);

  head?.appendChild(newTitle);
  head?.appendChild(newFavicon);
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
              <ColorpalOnboarding setTitleAndFavicon={setTitleAndFavicon} />
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
