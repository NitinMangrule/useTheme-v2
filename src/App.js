import "./styles.css";
import useTheme from "./useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App">
      <h1>Light & Dark Theme</h1>
      <h1>{theme}</h1>
      <div className="parent">
        <input id="toggleButton" type="checkbox" onChange={toggleTheme} />
        <label htmlFor="toggleButton">
          <div className="circle"></div>
        </label>
      </div>
    </div>
  );
}
