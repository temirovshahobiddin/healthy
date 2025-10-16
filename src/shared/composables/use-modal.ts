export const modalStore = ref<Map<ModalId, IModalValue>>(new Map())

const orderModalOpen = ref<boolean>(false)
const courseOrderModalOpen = ref<boolean>(false)
const courseOrderData = ref<{ serviceId?: string | number; specialistId?: string | number }>({})

export const useModal = () => {
  const setModal = (id: ModalId, value: IModalValue) => {
    if (!modalStore.value.has(id)) modalStore.value.set(id, value)
    else console.warn(`Modal with id "${id}" duplicated!`)
  }

  const getModal = (id: ModalId): IModalValue | undefined => {
    return modalStore.value.get(id)
  }

  const removeModal = (id: ModalId) => {
    if (modalStore.value.has(id)) modalStore.value.delete(id)
  }

  const show = <Key extends keyof IModal>(id: Key, args?: IModal[Key]) => {
    const modal = getModal(id)
    if (modal && modal?.show) modal.show(args)
  }

  const hide = <Key extends keyof IModal>(id: Key) => {
    const modal = getModal(id)
    if (modal && modal?.hide) modal.hide()
  }

  const openCourseOrderModal = (serviceId?: string | number, specialistId?: string | number) => {
    courseOrderData.value = { serviceId, specialistId }
    courseOrderModalOpen.value = true
  }

  return { setModal, getModal, removeModal, show, hide, orderModalOpen, courseOrderModalOpen, courseOrderData, openCourseOrderModal }
}
