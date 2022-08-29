import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={"/login"}> Логин</Link></li>
                    <li><Link to={"/registration"}>Регистрация</Link></li>
                    <li><Link to={"/password/recovery"}> Восстановление пароля</Link></li>
                    <li><Link to={"/password/new"}> Ввод нового пароля</Link></li>
                    <li><Link to={"/test"}> Тестовая</Link></li>
                    <li><Link to={"/profile"}>Профиль</Link></li>
                </ul>
            </nav>
        </div>

    );
};

export default Header;