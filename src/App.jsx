import About from "./About";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./EditPost";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data, isLoading, fetchError } = useAxiosFetch('http://localhost:3500/posts')

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  return (
    <div className="App">
      <Header title="ReactJS Blog" />

      <Nav />
      <Switch>
        <Route exact path="/">
          <Home isLoading={isLoading} fetchError={fetchError} />
        </Route>
        <Route exact path="/post" component={NewPost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;