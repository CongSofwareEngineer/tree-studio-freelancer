import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import MessageEN from '@/public/assets/language/en.json'
import MessageVN from '@/public/assets/language/vn.json'
import { LOCALE_DATA } from '@/constants/app'
export const useLanguage = create(
  devtools(
    (set) => ({
      language: {
        la: 'en',
        messages: MessageEN
      },
      setLanguage: () => set((state) => {
        switch (state) {
        case LOCALE_DATA.EN:
          return {
            la: LOCALE_DATA.EN,
            messages: MessageEN
          }

        case LOCALE_DATA.VN:
          return {
            la: LOCALE_DATA.VN,
            messages: MessageVN
          }
        default:
          return {
            la: LOCALE_DATA.EN,
            messages: MessageEN
          }
        }
      }),
      refreshLanguage: () => set((state) => ({ language: state }))
    }),
    {
      enabled: !!process.env.NEXT_PUBLIC_DEV_TOOL_REDUX
    }
  )
)

export const useRedux = create(
  devtools(
    persist(
      (set, get) => ({
        // State
        userData: {},
        bears: 0,
        setting: '',

        // Actions
        setUserData: (data) => set({ userData: data }),
        setSetting: async () => {
          let data = await fetch('', {
            cache: 'no-cache'
          })
          data = await data.json()
          set({ setting: data })
        },
        readyRedux: () => {
          console.log({ get: get() });
          if (process.env.NEXT_PUBLIC_DEV_TOOL_REDUX) {
            const data = get()
            set({ ...data })
          }
        }
      }),
      {
        name: 'zustand-persist', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
      }
    ),

    {
      enabled: !!process.env.NEXT_PUBLIC_DEV_TOOL_REDUX
    }

  )
)
