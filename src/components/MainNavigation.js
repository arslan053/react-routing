import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css'

export default function MainNavigation(){
  return (
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink 
          to=""
          className={({ isActive }) => isActive ? classes.active : undefined }
          end //as NAvLInk check the currently active path start with that path then it make it active IDK about new versions
          >
            Home</NavLink>
        </li>
        <li>
          <NavLink 
          to="products"
          className={({ isActive }) => isActive ? classes.active : undefined }
          >
            Products</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}
