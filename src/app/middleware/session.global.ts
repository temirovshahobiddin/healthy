import { useProfileService } from "~/features/profile"

export default defineNuxtRouteMiddleware(async (to) => {
  const localePath = useLocalePath()
  const { getProfile } = useProfileService()
  const { $session } = useNuxtApp()

  const hasToken = !!useCookie("token")
  const isPublic = to.meta?.public || false
  const unauthorized = !isPublic && !hasToken

  const promise = new Promise((resolve) => setTimeout(resolve, 1000))

  if (!$session.loaded.value) {
    await promise
    $session.loaded.value = true
  }

  if (hasToken && !$session.profile.value) await getProfile()
  // if (unauthorized) return navigateTo(localePath("/auth/sign-in"))
})
