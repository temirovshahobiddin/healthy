// export const useSiteSettingsApi = () => {
//   const baseURL = "/site-info"
//   const { $http } = useNuxtApp()

//   const getSiteSettings = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
//     return $http.$get(baseURL, { params })
//   }

//   return {
//     getSiteSettings
//   }
// }


export const useSiteSettingsApi = () => {
  const baseURL = '/site-info'
  const { $http } = useNuxtApp()

  const getSiteSettings = (params:any) => {
    return $http.$get(baseURL, { params })
  }

  return { getSiteSettings }
}
