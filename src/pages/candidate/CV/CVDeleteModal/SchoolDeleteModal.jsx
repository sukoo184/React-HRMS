import React , { useState } from 'react'
import { Modal } from "semantic-ui-react";
import SchoolDelete from '../CVDelete/SchoolDelete';


export default function SchoolDeleteModal({id}) {

    const [openDelete, setOpenDelete] = useState(false)
    return (
        <div>
            <Modal
                size="small"
                closeIcon
                onClose={() => setOpenDelete(false)}
                onOpen={() => setOpenDelete(true)}
                open={openDelete}
                trigger={
                    <div className="ui right floated medium  icon buttons">
                    <button  className="ui  red  button"><i className="trash icon"></i> </button>
                </div>
                   
                }
            >
                <Modal.Header>Okul Bilgisi Silme</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <SchoolDelete id={id} />
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        </div>
    )
}
