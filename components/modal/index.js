import { ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Modal } from "@chakra-ui/react";

export default function CustomModal({ children, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {children}
      </ModalContent>
    </Modal>
  );
}