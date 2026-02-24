import { ReactNode } from 'react';
interface ModalProps {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Function to call when closing the modal */
    onClose: () => void;
    /** Title of the modal */
    title: string;
    /** Content of the modal */
    children: ReactNode;
    /** Optional footer content */
    footer?: ReactNode;
}
/** Modal component with overlay, header, body, and optional footer */
declare const Modal: ({ isOpen, onClose, title, children, footer }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map