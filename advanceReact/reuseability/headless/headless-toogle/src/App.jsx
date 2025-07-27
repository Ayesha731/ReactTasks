import "./App.css";
import Menu from "./components/Menu";
import Toggle from "./components/Toggle";
import { BsStar, BsStarFill } from "react-icons/bs";
import Star from "./components/Toggle/Star";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <>
      <h1>App</h1>
      {/* <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle> */}

      <Star onChange={() => console.log("Star was clicked!!")} />

      <br />
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <br />
      <br />
      <hr />
      <Menu
        onOpen={() => {
          console.log("Menu Toggled... ");
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
    </>
  );
}

export default App;
