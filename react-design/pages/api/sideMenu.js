import "./css/side.css"
import Image from 'next/image'
import Logo from "../../public/images/Logo1.svg"
import bg from "../../public/images/Group1.svg"
import CardIcon from "../../public/images/CardIcon.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faCaretDown, faSquarePollVertical, faIdBadge, faChartSimple, faFileContract, faCube } from '@fortawesome/free-solid-svg-icons'

export default function SideMenu() {
  return (
    <>
      <div className="sidebar">
        <ul className="menu">
          <Image className="ms-3 mt-2 logo"
            src={Logo}
            alt="Picture of the author"
            width="146px"
            height="32px"
          />
          <a className="hoverable" href="#"><li className="noLink">
            <FontAwesomeIcon icon={faSquarePollVertical} className="me-3" />
            <span >Ana səhifə </span>
          </li></a>
          <li className="Item">
            <a
              className="collapsed pb-3 hoverable"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              <span>
                <FontAwesomeIcon icon={faFileContract} className="me-3" />
                Müqavilələr<FontAwesomeIcon icon={faCaretDown} className="down" /></span>
            </a>
            <div className="collapse" id="collapseExample1">
              <ul>
                <li className="mt-3 mb-3"><a href="#">Reqresslər</a></li>
                <li className="mt-2 mb-3"><a href="#">Sazişlər</a></li>
                <li className="mt-2"><a href="#">Faktorinq müqaviləsi</a></li>
              </ul>
            </div>
          </li>
          <li className="Item">
            <a
              className="collapsed pb-3 hoverable"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              <span>
                <FontAwesomeIcon icon={faIdBadge} className="me-3" />
                Zaminli Portfel <FontAwesomeIcon icon={faCaretDown} className="down2" /></span>
            </a>
            <div className="collapse" id="collapseExample2">
              <ul>
                <li className="mt-3 mb-3"><a href="#">Reqresslər</a></li>
                <li className="mt-2 mb-3"><a href="#">Sazişlər</a></li>
                <li className="mt-2"><a href="#">Faktorinq müqaviləsi</a></li>
              </ul>
            </div>
          </li>
          <li className="Item">
            <a
              className="collapsed pb-3 hoverable"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              <span>
                <FontAwesomeIcon icon={faChartSimple} className="me-3" />
                Hesabatlar <FontAwesomeIcon icon={faCaretDown} className="down3" /></span>
            </a>
            <div className="collapse" id="collapseExample3">
              <ul >
                <li className="mt-3"><a href="#">Hesabat</a></li>
              </ul>
            </div>
          </li>
          <a href="#"><li className="noLink">
            <FontAwesomeIcon icon={faCube} className="me-3" />
            Problemli məhsullar
          </li></a>
        </ul>
        <div><Image className=" bg"
          src={bg}
          alt="Picture of the author"
          width="384px"
          height="360px"
        /><div id="card" className="card ms-2 rounded-4">
            <div className="card-body">
              <Image className="mt-2 mb-3"
                src={CardIcon}
                alt="Picture of the author"
                width="34px"
                height="34px"
              />
              <h5 className="card-title">Qısayol yarat</h5>
              <p className="card-text">Vacib sənədlərə sürətli keçid.</p>
              <button href="#" className="btn btn-light">Sənəd əlavə et</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
