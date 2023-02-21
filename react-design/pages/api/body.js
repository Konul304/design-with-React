import "./css/body.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-solid-svg-icons"

export default function Body() {
    return (
        <>
            <div className="mainContainer mt-2 d-flex justify-content-between pe-3">
                <div aria-label="breadcrumb" className="me-5 ms-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"><a href="#">Müqavilələr</a></li>
                        <li class="breadcrumb-item"><a href="#">Reqresslər</a></li>
                        <li class="breadcrumb-item">Müştəri</li>
                    </ol>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="input-group">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type="text" className="form-control"
                            placeholder="Sənəd nömrəsi və ya partnyor adı"
                        />
                    </div>

                    <div class="input-group  group2">
                        <input type="text" class="form-control"
                            placeholder="Tarix üzrə axtar"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                            <FontAwesomeIcon icon={faCalendar} />
                        </button>
                    </div>
                </div>



            </div>
        </>
    )
}