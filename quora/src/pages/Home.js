
function Home() {
  return (
    <div className="grid md:grid-rows-4">

      {/* 1er bloc du bas */}
      <div className="md:col-span-2 bg-blue-100">
        header
      </div>
      {/* 1er bloc du bas */}

      {/* 2e bloc du bas */}
      <div className="md:col-span-2 bg-gray-100">

        <div className="grid md:grid-cols-4">
          {/*  1er bloc à gauche */}
          <div className="md:col-span-1 bg-green-50">
            sidebar
          </div>
          {/*  1er bloc à gauche */}

          {/*  1er bloc à droite */}
          <div className="md:col-span-2 bg-red-50"> 
            corps
          </div>
          {/*  1er bloc à droite */}

          {/*  1er bloc à droite */}
          <div className="md:col-span-1 bg-yellow-50"> 
            <div className="md:col-span-1 bg-pink-100">
              haut
            </div>
            <div className="md:col-span-1 bg-pink-100">
              bas
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
