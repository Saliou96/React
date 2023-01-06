import Center from "../components/Center/Center";
import Leftnavbar from "../components/Leftnavbar";
import LeftSide from "../components/LeftSide/LeftSide";
import Navigation from "../components/Navigation";
import RightSide from "../components/RightSide/RightSide";
import Tendances from "../components/Tendances";
import Thèmes from "../components/Themes";

function Home() {
  return (
    <div className="Home">
      <LeftSide/>
      <Center/>
      <RightSide/>
    </div>
  );
}

export default Home;
