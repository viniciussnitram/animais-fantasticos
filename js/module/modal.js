export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("active");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  addModalEvents() {
    this.btnOpen.addEventListener("click", this.eventToggleModal);
    this.btnClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}
