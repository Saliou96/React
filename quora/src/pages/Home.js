
function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">Home</h1>
        <div className="grid grid-rows-6">

          <div className="row-span-3">
            header
          </div>

          <div className="row-span-3">
            <div className="grid-cols-12">
              <div className="rid-cols-3">
                sidebar
              </div>
              <div className="rid-cols-9">
                <div className="rid-cols-5">
                  content(1)
                </div>
                <div className="rid-cols-4">
                  content(2)
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
}

export default Home;
