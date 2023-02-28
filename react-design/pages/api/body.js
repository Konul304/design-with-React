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
// import paginationFactory from "react-bootstrap-table2-paginator";
// import BootstrapTable from "react-bootstrap-table-next";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

export default function Body() {

    const [getArray, setArray] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('')

    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://63f46dec3f99f5855daf40a5.mockapi.io/api/pk/pkdatas"
        })
            .then((res) => {
                setArray(res.data);
            })
    }, [])

    // const products = getArray;

    // const columns = [
    //   { dataField: "id", text: "Id" },
    //   { dataField: "no", text: "Name" },
    //   { dataField: "createdAt", text: "Animal" },
    //   { dataField: "cost", text: "Animal" },
    //   { dataField: "quantity", text: "Animal" },
    //   { dataField: "reason", text: "Animal" },
    //   { dataField: "status", text: "Animal" }
    // ];
  
    // console.log(getArray);
  
    // const pagination = paginationFactory({
    //   page: 2,
    //   sizePerPage: 2,
    //   lastPageText: ">>",
    //   firstPageText: "<<",
    //   nextPageText: ">",
    //   prePageText: "<",
    //   showTotal: true,
    //   alwaysShowAllBtns: true,
    //   onPageChange: function (page, sizePerPage) {
    //     console.log("page", page);
    //     console.log("sizePerPage", sizePerPage);
    //   },
    //   onSizePerPageChange: function (page, sizePerPage) {
    //     console.log("page", page);
    //     console.log("sizePerPage", sizePerPage);
    //   }
    // });
    

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
            <div className="mainContainer pt-4 pb-4 d-flex justify-content-between pe-3">
                <div aria-label="breadcrumb" className="me-5 ms-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"><a href="#">Müqavilələr</a></li>
                        <li className="breadcrumb-item"><a href="#">Reqresslər</a></li>
                        <li className="breadcrumb-item">Müştəri</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-center">
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
            <div className="tableContent">
                <table className="table">
                    <thead className="cell-padding-left-2 ">
                        <tr>
                            <th className=" cell-padding cell-padding-left" scope="col">N.A.S NO:</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Reqress NO:</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Tarix</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Ümumi məbləğ</th>
                            <th className=" cell-padding cell-padding-left" scope="col">Miqdar</th>
                            <th className=" cell-padding" scope="col">E-imza</th>
                            <th className=" cell-padding cell-padding-left-3" scope="col">Səbəb</th>
                            <th className=" cell-padding cell-padding-left-3" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getArray.filter((val) => {
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
                                    <td className="pt-4">
                                        <div className="key"><FontAwesomeIcon className="key1"  icon={faKey} /></div>
                                    </td>
                                    <td className="cell-padding cell-padding-left"><div className="reason">{val.reason}</div></td>
                                    <td className="cell-padding cell-padding-left pe-4"><div className="status">{val.status}</div></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
{/*                 
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        // defaultSorted={defaultSorted}
        pagination={pagination}
      /> */}
            </div>
        </>
    )
}