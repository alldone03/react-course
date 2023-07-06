import { Route, Switch } from "react-router-dom";
import AllMeetupdPage from "./assets/pages/AllMeetups";
import NewMeetupPage from "./assets/pages/NewMeetup";
import FavoritesPage from "./assets/pages/Favorites";
import Layout from "./components/layout/Layout";






function App() {


  return (<>
    <Layout>
      <Switch>
        <Route path='/' exact><AllMeetupdPage /></Route>
        <Route path='/new-meetup' ><NewMeetupPage /></Route>
        <Route path='/favorites' ><FavoritesPage /></Route>
      </Switch>
    </Layout>

  </>

  );
}

export default App
