import Footer from './Components/Footer';

function App() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[300px] absolute left-0 top-0 bg-[url('./assets/bg.png')] bg-no-repeat bg-cover bg-bottom"></div>
      <div className="absolute left-0 top-0 w-full h-[300px]  bg-gradient-to-br from-[#654ea3] to-[#eaafc8] text-white opacity-65"></div>
      <div className="w-full absolute flex justify-center">
        <div className="w-[600px]">
          <h2 className="text-white text-2xl my-10 font-bold">TODO</h2>
          <div className="text-gray-600 text-sm font-semibold">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
