import React from "react";
import Form from "./Form";

const FormModal = ({setShowResults, setResultsData}) => {
    return (
        <>
            <div className="modal fade" tabindex="-1" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{fontFamily: 'Roboto'}}>
                        <div className="modal-header border-0" style={{textDecoration: 'none'}}>
                            <button className="btn-close" data-bs-dismiss='modal' style={{justifyContent: 'end'}}></button>
                        </div>
                        <div className="modal-body" style={{marginTop: '-10px'}}>
                            <Form setShowResults={setShowResults} setResultsData={setResultsData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormModal;