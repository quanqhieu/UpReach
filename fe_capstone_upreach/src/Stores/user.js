import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useUserStore = create()(
  persist(
    (set) => ({
      user:{},

    setUserInfo: (user) => {
        set(() => ({
            user: user
        }))
      },

    }),
    {
      name: 'user-draw-storage'
    }
  )
)

export { useUserStore }