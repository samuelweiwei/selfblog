import "./App.css";
import List from "./component/Data/DataCollector";
import Posts from "./component/Posts/Posts";
import Toolbar from "./component/Layout/CommonButton";
import Signup from "./component/Auth/Signup";
import LightSwitch from "./component/Layout/LightSwitch";
import { RenderListOneByOne } from "./component/Data/DataCollector";
import MovingDot from "./component/Layout/MovingDot";
import TravelPlan from "./component/Data/TravelPlan";
import Gallery from "./component/Data/Gallery";
import InputState from "./component/Layout/InputState";
import FeedbackForm, { CounterButton } from "./component/Layout/FeedbackForm";
import ListState, { ListImmer } from "./component/Data/ListState";
import ListReducer from "./component/Data/ListReducer";
import RefComponent from "./component/Data/RefHooks";
import { RefStopWatch } from "./component/Data/RefHooks";
import EffectHook, { MonitorEvent } from "./component/Data/EffectHook";
import { CallbackFailHook, CallbackHook } from "./component/Data/CallbackHook";
import Fetcher from "./component/Data/Fetcher";
import { Helmet } from "react-helmet";
import MemoryGame from "./component/Exercises/MemoryGames";
import Accordian from "./component/Exercises/Accordian/Accordian";
import ShoppingList from "./component/Exercises/LocalStore";
import PokemanList from "./component/Exercises/Pokeman/PokemanList";
import PokemanReducer from "./component/Exercises/Pokeman/PokemanReducer";
import LikeButton from "./component/Exercises/LikeButton";
import BigMessage from "./jsexercise/testdome/react/Anchortest";

function App() {
  return (
    <>
      <div className="main-content">
        <Helmet>
          <title>App page title</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>
        <h1 className="main-head">Blog use React js</h1>
        {/*<Posts />
      <Toolbar />
      <List /> 
      <Signup /><br />
      <LightSwitch /> 
      <RenderListOneByOne /> 
      <MovingDot />
      <TravelPlan />
      <Gallery />
      <InputState /> 
      <FeedbackForm />
      <CounterButton  />
      <ListState />
      <ListImmer />
      <ListReducer />
      <RefComponent />
      <RefStopWatch /> 
      <EffectHook />
      <MonitorEvent />
      <CallbackFailHook />
      <CallbackHook />
      <Fetcher />
        <MemoryGame
          images={[
            "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
            "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
            "https://images.unsplash.com/photo-1520763185298-1b434c919102",
            "https://images.unsplash.com/photo-1442458017215-285b83f65851",
            "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
            "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
          ]}
        />

        <Accordian
          items={[
            {
              title: "What is Github and how does it work?",
              content:
                "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
            },
            {
              title: "How do I see GitHub's availability?",
              content: "Check our real-time status report",
            },
            {
              title: "Why is GitHub so popular?",
              content:
                "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
            },
          ]}
        />
       
        <ShoppingList />
        <PokemanList /> 
        <MemoryGame
          images={[
            "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
            "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
            "https://images.unsplash.com/photo-1520763185298-1b434c919102",
            "https://images.unsplash.com/photo-1442458017215-285b83f65851",
            "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
            "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
          ]}
        />
        <PokemanReducer initialUrl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"/>*/}
        <LikeButton/>
        <BigMessage />
      </div>
    </>
  );
}

export default App;
