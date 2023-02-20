import "./side.css"
import Logo from "../../public/Logo.png"
import MenuIcon from "../../public/Menu-icon.png"
export default function SideMenu() {
  return (
    <>
      <div className="wrapper d-flex">
        <div className="sidebar">
            <img src={Logo}/>
          <ul>
            <li>
              <img src={MenuIcon}/>
            </li>
            <li>two</li>
            <li>three</li>
          </ul>
          <small className="text-muted px-3">heading</small>
          <ul>
            <li>four</li>
            <li>five</li>
            <li>six</li>
          </ul>
          <small className="text-muted px-3">heading</small>
          <ul>
            <li>seven</li>
            <li>eight</li>
          </ul>
        </div>
      </div>
    </>
  )
}
