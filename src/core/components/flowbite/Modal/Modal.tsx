import React from 'react';
import { Modal as FlowbiteModal } from 'flowbite-react';
import { ModalProps } from './types';
import { customTheme } from './theme';

const Modal: React.FC<ModalProps> = (props) => {
    return (
        <FlowbiteModal size={props.size} theme={customTheme} dismissible show={props.isOpen} onClose={props.close}>
            {props.title &&
                <FlowbiteModal.Header>
                    {props.title}
                </FlowbiteModal.Header>
            }
            <FlowbiteModal.Body>
                {props.children}
            </FlowbiteModal.Body>
        </FlowbiteModal>
    );
}

export default Modal;