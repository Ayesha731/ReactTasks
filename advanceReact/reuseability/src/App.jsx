import Button from "./components/buttonTask/Button";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Marquee from "../src/components/buttonTask/Marquee";
import Avatar from "./components/avatar/Avatar";
import avatar from "./assets/avatar.jpeg";
import MenuButton from "./components/menuButton/MenuButton";
import Menu from "./components/menuButton/Menu";
import MenuDropdown from "./components/menuButton/MenuDropdown";
import { Children, useState } from "react";
import MenuItem from "./components/menuButton/MenuItem";
import Context from "./components/context/Context";

function App() {
 

  const handleButton = () => {
    console.log("Single Click...");
  };
  const handleMouseEnter = () => {
    console.log("Mouse Enter...");
  };
  const handleMouseLeave = () => {
    console.log("Mouse Leave...");
  };
  const handleDoubleClick = () => {
    console.log("Double Click...");
  };

  const sports = ["Tennis", "Racquetball", "Pickleball", "Squash"];

  return (
    <>
      {/* <Marquee>🧛‍♀️ Welcome to Horrorville 🧛‍♀️</Marquee> */}
      {/* ***********Button********* */}
      {/*<Button
        onClick={handleButton}
        onMouseEnter={handleMouseEnter}
        onDoubleClick={handleDoubleClick}
        onMouseLeave={handleMouseLeave}
        // style={{ color: "green" }}
        varient="success"
        size="sm"
        className="brown"
      >
        <FcGoogle />
        Log in with Google
      </Button>

      <Button
        onClick={handleButton}
        onMouseEnter={handleMouseEnter}
        onDoubleClick={handleDoubleClick}
        onMouseLeave={handleMouseLeave}
        // style={{ color: "green" }}
        varient="warning"
        size="md"
        className="brown"
      >
        <FcGoogle />
        Log in with Google
      </Button>

      <Button
        onClick={handleButton}
        onMouseEnter={handleMouseEnter}
        onDoubleClick={handleDoubleClick}
        onMouseLeave={handleMouseLeave}
        // style={{ color: "green" }}
        varient="danger"
        size="lg"
        className="brown"
      >
        <FcGoogle />
        Log in with Google
      </Button> */}

      {/* **************Avatar******************* */}
      {/* <Avatar src={avatar} alt={"avatar is not found"} />
      <br />
      <Avatar varient="navy">BZ</Avatar>
      <br />
      <Avatar varient="navy" /> */}

      {/* *************Menu Button************ */}

      {/* <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      /> */}

      {/* <Menu>
        <MenuButton buttonText="Sports" />
        <MenuButton>{"Sports"}</MenuButton>
        <MenuDr opdown items={sports} />
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem key={sport}>
              <a href="#"> {sport}</a>
            </MenuItem>
          ))}
        </MenuDropdown>
      </Menu> */}

      <Context />
    </>
  );
}

export default App;
