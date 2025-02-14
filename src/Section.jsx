import { useState } from "react";
import Modal from "./Modal";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default function EffectSection() {
    // const [isOpen, setIsOpen] = useState(false)

    // const handleOpen = () => setIsOpen(true)
    // const handleClose = () => setIsOpen(false)


    return (
        <section>
            <h3>Effects</h3>
            {/* <Button onClick={handleOpen}>
                Open information
            </Button> */}
            {/* <Button onClick={handleCloseModal}>
                Close Modal
            </Button> */}

            <Modal 
                trigger={
                    <Button>
                        Open new info modal
                    </Button>
                }
            >
                <h3>Hello from Modal</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam lab ore dolorem eius ullam repudiandae m
                    inima nobis aspernatur! Animi numquam, saepe molestias
                    nisi itaque veniam natus? Officiis maxime ex a. Officiis.
                </p>
                {/* {({ handleCloseModal, handleOpenModal }) => (
                    <>
                    </>
                )} */}
            </Modal>
        </section>
    )
}