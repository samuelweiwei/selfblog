import './App.css';
import List from './component/Data/DataCollector';
import Posts from './component/Posts/Posts';
import Toolbar from './component/Layout/CommonButton';
import Signup from './component/Auth/Signup';
import LightSwitch from './component/Layout/LightSwitch';
import { RenderListOneByOne } from './component/Data/DataCollector';
import MovingDot from './component/Layout/MovingDot';
import TravelPlan from './component/Data/TravelPlan';
import Gallery from './component/Data/Gallery';
import InputState from './component/Layout/InputState';
import FeedbackForm, { CounterButton } from './component/Layout/FeedbackForm';
import ListState, { ListImmer } from './component/Data/ListState';
import ListReducer from './component/Data/ListReducer';
import RefComponent from './component/Data/RefHooks';
import { RefStopWatch } from './component/Data/RefHooks';
import EffectHook, { MonitorEvent } from './component/Data/EffectHook';
import { CallbackFailHook, CallbackHook } from './component/Data/CallbackHook';
import Fetcher from './component/Data/Fetcher';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <div className="main-content">
      <Helmet>
        <title>App page title</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <h1 className="main-head">
        Blog use React js
      </h1>
      <Posts />
      <Toolbar />
      {/*<List /> 
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
      <Fetcher />*/}
    </div>
    </>
  );
}

export default App;
