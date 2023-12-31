import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Productors from "./pages/Productors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import PostsDataProvider from "./utils/PostsContext";
import { AuthContextProvider } from "./utils/AuthContext";
import Connexion from "./components/Connexion";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import Messages from "./pages/Messages";
import ChatBotContextProvider  from "./utils/ChatBotContext";
import ProducersDataProvider from "./utils/ProducersContext ";
import LayoutMessages from "./components/LayoutMessages";
function App() {
  return (
    
    <Router>
      <AuthContextProvider>
      <PostsDataProvider>
      <ChatBotContextProvider>
      <ProducersDataProvider>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Connexion/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/> 
          <Route path="/producteurs" element={<Productors/>}/>
          <Route path="/our-team" element={<OurTeam/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          
          
        </Route>
        <Route path="/1" element={<LayoutMessages/>}>
          <Route path="/1/chatbot" element={<Chatbot/>}/>
          <Route path="/1/messages/:name" element={<Messages/>}/>
        </Route>
          
      </Routes>
      </ProducersDataProvider>
      </ChatBotContextProvider>
      </PostsDataProvider>
      </AuthContextProvider>
    </Router>
      
    
  );
}

export default App;
