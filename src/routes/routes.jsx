import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/homepage/HomePage';
import LoginView from '../views/login/LoginView';
import RegisterView from '../views/register/RegisterView';
import MovieView from "../views/movie/MovieView"



const CustomRoutes = () => 
    <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/Movies" element={ <HomePage />}/>
        <Route path="/Series" element={ <HomePage/>}/>
        <Route path="login" element={ <LoginView />}/> 
        <Route path="register" element={ <RegisterView />}/>
        <Route path="movie/:id" element={ <MovieView />}/>
    </Routes>
;

export default CustomRoutes;