import React from "react";
import {NavLink} from "react-router-dom";
import s from './Nav.module.css'

type NavigationPropsType = {}
const NavigationArray = [{id:1,name: 'Main'}, {id:2,name: 'Skills'}, {id:3,name: 'My projects'}, {id:4,name: 'Contacts'}]
export const Navigation = (props: NavigationPropsType) => {
    const MapNavigate = NavigationArray.map(el => <span key={el.id}><NavLink className={s.navlink}
                                                                 to='/'>{el.name}</NavLink></span>)
    return (
        <nav className={s.nav}>
            {MapNavigate}
        </nav>
    )
}
