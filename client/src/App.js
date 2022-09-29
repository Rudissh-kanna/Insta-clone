import {useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import PostView from './components/Postview/Postview';
import LandingPage from './components/landing-page/landing-page';
import Post from './components/post/Post';

function App() {

  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch("https://insta-clone-rk-10x.herokuapp.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(fetchedData => setdata(fetchedData));
  },)

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/posts/add" element={<Post/>}/>
        <Route path='/posts' element={data && <PostView Data={data}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
