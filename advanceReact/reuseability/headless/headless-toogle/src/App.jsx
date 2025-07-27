import "./App.css";
import Menu from "./components/Menu";
import Toggle from "./components/Toggle";
import { BsStar, BsStarFill } from "react-icons/bs";
import Star from "./components/Toggle/Star";
import Main from "./components/refHook/Main";
import Ref from "./components/refHook/Ref";
import RenderProp from "./components/renderProp/RenderProp";
import ToggleDisplay from "./components/Toggle/ToggleDisplay";
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <>
      <h1>App</h1>

      <Toggle>
        <Toggle.Button>
          {/* <Toggle.On>
            <BsStarFill className="star filled" />
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
            <div className="box"></div>
          </Toggle.Off> */}
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>

      <Star onChange={() => console.log("Star was clicked!!")} />

      <br />
      <hr />
      {/* <br />
      <Menu
        onOpen={() => {
          console.log("Menu toggleddd... ");
        }}
      >
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <br />
      <br />
      <hr /> */}
      <Menu
        onOpen={() => {
          console.log("Menu open... ");
        }}
      >
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {/* <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle> */}

      {/* <Main /> */}
      {/* <Ref /> */}
      {/* <RenderProp /> */}
    </>
  );
}

export default App;
