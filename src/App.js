import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeInputContainer from "./components/CakeInputContainer";
import Header from "./components/Header/Header";
import store from "./redux/store";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="stacks">
          <ItemContainer cake />
          <ItemContainer />
        </div>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <CakeInputContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
