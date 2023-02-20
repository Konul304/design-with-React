import "./side.css"
import Image from 'next/image'
import Logo from "../../public/Logo1.svg"
import CardIcon from "../../public/CardIcon.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./Navbar"


export default function SideMenu() {
  return (
    <>
        <div className="sidebar">
          <ul>
            <Image className="ms-1 mt-2 mb-5"
              src={Logo}
              alt="Picture of the author"
              width="146px"
              height="32px"
            />
            <li>
              <FontAwesomeIcon icon={faSquarePollVertical} className="me-2" />
              <span>Ana səhifə </span>
            </li>
            <li>
              <p>
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span>
                    <FontAwesomeIcon icon={faFileContract} className="me-2" />
                    Müqavilələr<FontAwesomeIcon icon={faCaretDown} className="ms-4" /></span>
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <ul>
                    <li>Reqresslər</li>
                    <li>Sazişlər</li>
                    <li>Faktorinq müqaviləsi</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <p>
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span>
                    <FontAwesomeIcon icon={faIdBadge} className="me-2" />
                    Zaminli Portfel <FontAwesomeIcon icon={faCaretDown} className="ms-4" /></span>
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <ul>
                    <li>Reqresslər</li>
                    <li>Sazişlər</li>
                    <li>Faktorinq müqaviləsi</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <p>
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span>
                    <FontAwesomeIcon icon={faChartSimple} className="me-2" />
                    Hesabatlar <FontAwesomeIcon icon={faCaretDown} className="ms-4" /></span>
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <ul>
                    <li>Reqresslər</li>
                    <li>Sazişlər</li>
                    <li>Faktorinq müqaviləsi</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>Problemli məhsullar</li>
          </ul>
          <div id="card" className="card ms-2 mt-5 rounded-4">
            <div className="card-body">
              <Image className="mt-2 mb-3"
                src={CardIcon}
                alt="Picture of the author"
                width="34px"
                height="34px"
              />
              <h5 className="card-title fs-5">Qısayol yarat</h5>
              <p className="card-text fs-6">Vacib sənədlərə sürətli keçid.</p>
              <a href="#" className="btn btn-light">Sənəd əlavə et</a>
            </div>
          </div>
        </div>
    </>
  )
}
