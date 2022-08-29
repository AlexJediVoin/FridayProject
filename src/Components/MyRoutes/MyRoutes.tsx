import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Test from '../Test/Test';
import LoginPage from "../Login/LoginPage";
import Error404 from "../Error404/Error404";
import PasswordRecovery from "../PasswordRecovery/PasswordRecovery";
import RegistrationPage from "../Registration/RegistrationPage";
import Profile from "../Profile/Profile";
import NewPassword from "../EnteringANewPassword/NewPassword";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password/recovery',
    PASSWORD_NEW: '/password/new',
    TEST: '/test',
    ERROR404: '/error404'
}

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.TEST}/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={PATH.PASSWORD_NEW} element={<NewPassword/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
            </Routes>
        </div>
    );
};

export default MyRoutes;