import React, { useEffect } from 'react'
import '../../styles/LeftMenu.css'

function Menu({ title, listObject }) {
    
    useEffect(() => {
        const allLi = document.querySelector(".menuContainer").querySelectorAll("li")

        function changeMenuActive() {
            allLi.forEach((n) => n.ClassList.remove("active"))
            this.ClassList.add("active")
        }

        allLi.forEach((n) => n.addEventListener("click"), changeMenuActive)
    }, [])

    return(
        <div className="menuContainer">
            <p>{title}</p>

            <ul>
                {listObject && listObject.map((li) => {
                    <li key={li.id}>
                        <a herf="#" alt="link">
                            {li.icon}
                            <span>{li.name}</span>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export { Menu }