import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ContactInfo from './components/ContactInfo';
import WorkExperience from './components/WorkExperience' ;
import Education from './components/Education' ;
import Skills from './components/Skills' ;
import Summary from './components/Summary' ;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMNj4IFH0N7Gohr_sfKSYSnit2iDn6Es",
  authDomain: "resume-builder-97f7e.firebaseapp.com",
  projectId: "resume-builder-97f7e",
  storageBucket: "resume-builder-97f7e.appspot.com",
  messagingSenderId: "51670453511",
  appId: "1:51670453511:web:6502e39538c6b36d39c9a2",
  measurementId: "G-EGK2F9ZNSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}>
              <Route index element={<ContactInfo/>}></Route>
              <Route path='contact-info' element={<ContactInfo/>}></Route>
              <Route path='work-experience' element={<WorkExperience/>}></Route>
              <Route path='education' element={<Education/>}></Route>
              <Route path='skills' element={<Skills/>}></Route>
              <Route path='summary' element={<Summary/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
