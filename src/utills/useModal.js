import { reactive } from "vue";

export const useModal = () => {
  const modal = reactive({
    isOpen: false,
  });
  console.log("mm", modal.isOpen);
  const openModal = () => {
    modal.isOpen = true;
  };
  const closeModal = () => {
    modal.isOpen = false;
  };
  return { modal, openModal, closeModal };
};
