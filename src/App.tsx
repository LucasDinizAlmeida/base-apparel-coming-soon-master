import { Content } from "./components/Content"
import { Header } from "./components/Header"


function App() {


  return (
    <div className="bg-linear-200 min-h-screen lg:justify-between flex flex-col lg:flex-row">
      <div className="my-3 px-3 lg:hidden">
        <Header />
      </div>
      <img src="./images/hero-mobile.jpg" alt="girl" className="h-screen lg:hidden" />
      <div className="w-full flex flex-col items-center justify-center lg:w-7/12">
        <Content />
      </div>

      <div className="h-full w-5/12 max-lg:hidden">
        <img src="./images/hero-desktop.jpg" alt="girl" className="h-fit w-full" />
      </div>
    </div>
  )
}

export default App
