// custom React Hook

import React from "react";

export default () => {
    let [modal, setModal] = React.useState(false);
    let [modalContent, setModalContent] = React.useState("I'm the Modal Content");

    let handleModal = (content = false) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }
    };

    return { modal, handleModal, modalContent };
};
