import React from 'react'
import MenuContainer from "../../components/MenuItems/MenuContainer";
import { background } from "./menu.module.scss";

function Menu() {
    return (
        <>
            <div className={background }>
                <MenuContainer/>
            </div>
        </>
    )
}

export default Menu
