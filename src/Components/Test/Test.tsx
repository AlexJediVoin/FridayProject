import React from 'react';
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";

const Test = () => {
    return (
        <div>
            <h1>Тестовая</h1>
            <div>
                Супер инпут
            </div>
            <SuperInputText/>
            <div>
                Супер кнопка
            </div>
            <SuperButton/>
            <div>
                Супер чекбокс
            </div>
            <SuperCheckbox/>
        </div>
    );
};

export default Test;