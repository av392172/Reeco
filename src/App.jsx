import { Navbar } from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import { SubNavbar } from "./components/SubNavbar";

function App() {
  return (
    <div className="bg-gray-100">
      {/* <div>Hello world</div> */}
      <Navbar />
      <SubNavbar />
      <OrderSummary />
    </div>
  );
}

export default App;
