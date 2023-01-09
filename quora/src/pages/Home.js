import Leftnavbar from "../components/Leftnavbar";
import Navigation from "../components/Navigation";
import Tendances from "../components/Tendances";
import Thèmes from "../components/Themes";

function Home() {
  return (
    // <div className="p-3 grid grid-col-4 gap-2">

    //   {/* 1er bloc du haut */}
    //   <div className="col-span-2 bg-blue-100">
    //     <Navigation/>
    //   </div>
    //   {/* 1er bloc du haut */}

    //   {/* 2e bloc du bas */}
    //   <div className="col-span-2">

    //     <div className="grid grid-cols-4  bg-blue-100">
    //       {/*  1er bloc à gauche */}
    //       <div className="md:col-span-1 bg-green-300 rounded m-2" >
            // {/* <Leftnavbar/> */}
    //         sidebar
    //       </div>
    //       {/*  1er bloc à gauche */}

    //       {/*  1er bloc à droite */}
    //       <div className="md:col-span-2 bg-red-300 rounded m-2"> 
    //         corps
    //       </div>
    //       {/*  1er bloc à droite */}

    //       {/*  1er bloc à droite */}
    //       <div className="md:col-span-1 "> 
    //         <div className="md:col-span-1 bg-red-300 rounded m-2">
    //           <Tendances/>
    //         </div>
    //         <div className="col-span-1 bg-red-300 rounded m-2">
    //           <Thèmes/>
    //         </div>
    //       </div>
    //       {/*  1er bloc à droite */}

    //     </div> 

    //   </div>
    //   {/* 2e bloc du bas */}

    // </div>
    <div className="p-2 grid grid-cols-2 gap-2">
      <div className="col-span-2 ml-15 mr-15">
      <Navigation/>
      </div>
      <div className="col-span-2 grid grid-cols-7 ml-15 mr-15">
        <div className="col-span-1 bg-green-500 m-1 rounded">
        {/* <Leftnavbar/> */}
        </div>
        <div className="col-span-5 bg-blue-500 m-1 rounded">
          Content
        </div>
        <div className="col-span-1 grid grid-rows-1">
          <div className=" bg-yellow-500 m-1 rounded">
          <Tendances/>
          </div>
          <div className=" bg-yellow-500 m-1 rounded">
          <Thèmes/>
          </div>
        </div>
      </div>
    </div>  

  );
}

export default Home;
