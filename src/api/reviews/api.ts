export const useReviewApi = () => {
  const baseURL = "/courses"
  const { $http } = useNuxtApp()

  const getReviewList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getReviewById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }
  const sendReview = (data: Record<string, any>): AsyncResponseContainer<any> => {
    return $http.$post(`/reviews`, data)
  }

  return {
    getReviewList,
    getReviewById,
    sendReview
  }
}
