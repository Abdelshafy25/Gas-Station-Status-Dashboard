import { Header } from "./Header";
import { Main } from "./Main";
import { SideBar } from "./SideBar";

const stats = [
  {
    num: "71,028",
    unit: "EGP",
    type: "Total Value",
    typeSpan: "",
    precent: "2%",
    sup: "",
    background: "#F4DBD4",
    color: "#FF7F5C",
  },
  {
    num: "20,000",
    unit: "m",
    type: "Total Sales",
    typeSpan: "",
    precent: "50 m",
    sup: "3",
    background: "#fff",
    color: "#00CBC0",
  },
  {
    num: "20,000",
    unit: "m",
    type: "Avg Sales",
    typeSpan: "",
    precent: "50 m",
    sup: "3",
    background: "#fff",
    color: "#FF7F5C",
  },
  {
    num: "1567",
    unit: "",
    type: "Total Transaction",
    typeSpan: "Count",
    precent: "20",
    sup: "",
    background: "#fff",
    color: "#00CBC0",
  },
];

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Main stats={stats} />
    </div>
  );
}

export default App;
