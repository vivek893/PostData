import './App.css';
import Post from './components/post';
import PostData from './components/postData';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Post/>} />
      <Route path="/posts/:postId" element={<PostData/>} />
    </Routes>
  </Router>
  );
}

export default App;
