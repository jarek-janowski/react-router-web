import {Route, Switch} from 'react-router-dom'
// import HeroPage from '../pages/HeroPage'
import About from '../pages/About'
import GenresPage from '../pages/GenresPage'
import Top5Page from '../pages/Top5Page'
import ErrorPage from '../pages/ErrorPage'

const Main = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={About} />
            <Route path="/genres" component={GenresPage} />
            <Route path="/top5" component={Top5Page} />
            <Route component={ErrorPage} />
        </Switch>
     );
}
 
export default Main;