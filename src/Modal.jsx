import React, { useState } from "react"

export default function Modal({ children, trigger }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(!isOpen)

    // const handleOpenModal = () => setIsOpen(true)
    // const handleCloseModal = () => setIsOpen(false)
    {/* children({ handleCloseModal, handleOpenModal }) */}
    
    return(
        <>
            {trigger && React.cloneElement(trigger, { onClick: handleOpen })}
            <dialog open={isOpen}>{children}</dialog>
        </>
    )
}