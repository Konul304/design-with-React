import "./css/body.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react'
import axios from "axios";


export default function Body() {
    const [getArray, setArray] = useState()
        useEffect(() => {
            axios({
                method: "GET",
                baseURL: "https://63f46dec3f99f5855daf40a5.mockapi.io/api/pk/pkdatas"
            })
            .then((res) => {
                console.log(res.data);
                setArray(res.data);
            })
        }, [])
    return (
        <>
            <div className="mainContainer mt-2 d-flex justify-content-between pe-3">
                <div aria-label="breadcrumb" className="me-5 ms-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"><a href="#">Müqavilələr</a></li>
                        <li className="breadcrumb-item"><a href="#">Reqresslər</a></li>
                        <li className="breadcrumb-item">Müştəri</li>
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

                    <div className="input-group  group2">
                        <input type="text" className="form-control"
                            placeholder="Tarix üzrə axtar"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            <FontAwesomeIcon icon={faCalendar} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="dataTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">N.A.S NO:</th>
                            <th scope="col">Reqress NO</th>
                            <th scope="col">Tarix</th>
                            <th scope="col">Ümumi məbləğ</th>
                            <th scope="col">Miqdar</th>
                            <th scope="col">E-imza</th>
                            <th scope="col">Səbəb</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log(getArray)
                            getArray && getArray.map((val, key) => {
                                return <tr>
                                <td>{val.id}</td>
                                <td>{val.no}</td>
                                <td>{val.createdAt}</td>
                                <td>{val.cost}</td>
                                <td>{val.quantity}</td>
                                <td>mdo</td>
                                <td>{val.reason}</td>
                                <td>{val.status}</td>
                            </tr>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}