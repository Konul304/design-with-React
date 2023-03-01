import "./css/body.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faMagnifyingGlass, faCalendar, faKey } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from "axios";
import moment from 'moment';
moment().format();
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate"

export default function Body() {

    const [getArray, setArray] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://63f46dec3f99f5855daf40a5.mockapi.io/api/pk/pkdatas"
        })
            .then((res) => {
                setArray(res.data);
            })
    }, [])

    const items = getArray;

    function Items({ currentItems }) {
        return (
            <>
                <table className="table">
                    <thead className="cell-padding-left-2">
                        <tr>
                            <th className=" cell-padding cell-padding-left round1" scope="col">N.A.S NO:</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Reqress NO:</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Tarix</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Ümumi məbləğ</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Miqdar</th>
                            <th className=" cell-padding" scope="col">E-imza</th>
                            <th className=" cell-padding cell-padding-left-3" scope="col">Səbəb</th>
                            <th className=" cell-padding cell-padding-left-3 round8" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.filter((val) => {
                                return select(val);
                            }).map((val) => (
                                <tr>
                                    <td className="cell-padding cell-padding-left-2">{val.id}</td>
                                    <td className="cell-padding cell-padding-left-2">{val.no}</td>
                                    <td className="cell-padding cell-padding-left">
                                        {moment(val.createdAt).format('DD.MM.YY , h:mm:ss')}
                                    </td>
                                    <td className="cell-padding cell-padding-left-2">{val.cost}</td>
                                    <td className="cell-padding cell-padding-left-2">{val.quantity}</td>
                                    <td className="pt-3">
                                        <div className="key"><FontAwesomeIcon className="key1" icon={faKey} /></div>
                                    </td>
                                    <td className="cell-padding cell-padding-left"><div className="reason">{val.reason}</div></td>
                                    <td className="cell-padding cell-padding-left pe-4"><div className="status">{val.status}</div></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        );
    }

    const PaginatedItems = ({ itemsPerPage }) => {
        const [itemOffset, setItemOffset] = useState(0);

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
           
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleChange2 = (e) => {
        setInputValue2(e.target.value)
    }

    const select = (val) => {
        if (!inputValue && !inputValue2) {
            return true;
        }
        else if (inputValue) {
            return val.id.includes(inputValue)
        }
        else if (inputValue2) {
            return val.createdAt.includes(inputValue2)
        }
    }

    return (
        <>
            <div className="mainContainer pt-4 pb-3 d-flex justify-content-between pe-3">
                <div aria-label="breadcrumb" className="me-5 ms-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"><a href="#">Müqavilələr</a></li>
                        <li className="breadcrumb-item"><a href="#">Reqresslər</a></li>
                        <li className="breadcrumb-item">Müştəri</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-center align-items-start">
                    <div className="input-group">
                        <button
                            className="btn btn-outline-secondary"
                            type="button" id="button-addon1">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input
                            onChange={handleChange}
                            type="text" className="form-control shadow-none me-3"
                            placeholder="Sənəd nömrəsi və ya partnyor adı"
                        />
                    </div>
                    <div className="input-group  group2">
                        <input type="text" className="form-control shadow-none"
                            onChange={handleChange2}
                            placeholder="Tarix üzrə axtar"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            <FontAwesomeIcon icon={faCalendar} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="tableContent" >
                <PaginatedItems itemsPerPage={6} />
            </div>
        </>
    )
}