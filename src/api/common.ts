export const useCommonApi = () => {
  const baseURL = "/join-course"
  const { $http } = useNuxtApp()

  const createOrder = (data: any): AsyncResponseContainer<any> => {
    return $http.$post(baseURL, data)
  }

  const joinTeam = (data: any): AsyncResponseContainer<any> => {
    return $http.$post("/join-team", data)
  }

  return {
    createOrder,
    joinTeam
  }
}
