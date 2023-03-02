'use client';
import "./css/body.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faMagnifyingGlass, faCalendar, faKey } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, use } from 'react'
import axios from "axios";
import moment from 'moment';
moment().format();
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate"

export default function Body() {
    const [items, setItems] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const endOffset = itemOffset + itemsPerPage;
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [currentItems, setCurrentItems] = useState(items?.slice(itemOffset, endOffset));

    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://63f46dec3f99f5855daf40a5.mockapi.io/api/pk/pkdatas"
        })
            .then((res) => {
                const data = res?.data;
                setItems(data);
                setCurrentItems(data?.slice(itemOffset, endOffset));
            })
    }, [itemOffset])

    const [pageCount, setPageCount] = useState((Math.ceil(items?.length / itemsPerPage)));

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (inputValue) {
            const filteredItems = items.filter((val) =>
                val.id.includes(inputValue)
            )
            setCurrentItems(filteredItems);
            setPageCount(0);
        }
        else if (inputValue2) {
            const searchDate = items.filter((val) =>
                val.createdAt.includes(inputValue2)
            )
            setCurrentItems(searchDate);
            setPageCount(0);
        }
        else {
            setCurrentItems(items?.slice(itemOffset, endOffset))
            setPageCount(5)
        }
    }, [inputValue, inputValue2])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleChange2 = (e) => {
        setInputValue2(e.target.value)
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
                <div className="d-flex justify-content-between align-items-start me-3">
                    <div className="group1">
                        <form className=" form1">
                            <button type="submit"></button>
                            <input className="input1" onChange={handleChange} type="search" placeholder="Sənəd nömrəsi və ya partnyor adı" />
                        </form>
                    </div>
                    <div>
                        <form className="form2">
                            <input className="input2" onChange={handleChange2} type="search" placeholder="Tarix üzrə axtar" />
                            <button type="date">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="tableContent" >
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
                            currentItems?.map((val) => (
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
            </div>
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