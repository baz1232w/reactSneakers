import style from './App.module.css';
import MaineContainer from './components/MainPage/MainPage';
import HeaderContainer from './components/Header/Header'
import CartContainer from './components/Cart/Cart'
import {Route, Routes} from "react-router-dom";
import PreferPageContainer from "./components/PreferPage/PreferPage";
import ProfilePageContainer from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className={style.container}>
        <HeaderContainer/>
        <CartContainer/>
        <Routes>
            <Route path={'/'} element={<MaineContainer/>}/>
            <Route path={'/main'} element={<MaineContainer/>}/>
            <Route path={'/prefer'} element={<PreferPageContainer/>}/>
            <Route path={'/profile'} element={<ProfilePageContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
