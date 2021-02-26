import {Route, Switch, useLocation} from 'react-router-dom'
// import HeroPage from '../pages/HeroPage'
import AboutPage from '../pages/AboutPage'
import GenresPage from '../pages/GenresPage'
import Top5Page from '../pages/Top5Page'
import ErrorPage from '../pages/ErrorPage'
import { useLayoutEffect } from 'react'

const Main = () => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])
    
    return ( 
        <Switch>
            <Route path="/" exact component={AboutPage} />
            <Route path="/genres" component={GenresPage} />
            <Route path="/top5" component={Top5Page} />
            <Route component={ErrorPage} />
        </Switch>
     );
}
 
export default Main;