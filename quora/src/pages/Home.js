import Leftnavbar from "../components/Leftnavbar";
import Navigation from "../components/Navigation";
import Tendances from "../components/Tendances";
import Thèmes from "../components/Themes";

function Home() {
  return (
    <div className="p-4 max-w-5xl grid gap-4">

      {/* 1er bloc du bas */}
      <div className="md:col-span-2 bg-blue-100">
        <Navigation/>
      </div>
      {/* 1er bloc du bas */}

      {/* 2e bloc du bas */}
      <div className="md:col-span-2 bg-gray-100">

        <div className="grid md:grid-cols-4">
          {/*  1er bloc à gauche */}
          <div className="md:col-span-0">
            <Leftnavbar/>
          </div>
          {/*  1er bloc à gauche */}

          {/*  1er bloc à droite */}
          <div className="md:col-span-2 bg-red-50 rounded-md m-2"> 
            corps
          </div>
          {/*  1er bloc à droite */}

          {/*  1er bloc à droite */}
          <div className="md:col-span-1 bg-gray-100"> 
            <div className="md:col-span-1 bg-red-100 rounded-md m-2">
              <Tendances/>
            </div>
            <div className="md:col-span-1 bg-red-100 rounded-md m-2">
              <Thèmes/>
            </div>
          </div>
          {/*  1er bloc à droite */}

        </div> 

      </div>
      {/* 2e bloc du bas */}

    </div>


  );
}

export default Home;
