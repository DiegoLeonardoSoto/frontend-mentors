import Notification from './components/Notification'
import { TNotification } from './types/TNotification'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
function App() {
  const { data, state, error } = useFetch<TNotification>('data.json')

  const [notifications, setNotifications] = useState<TNotification[]>([])

  useEffect(() => {
    data && setNotifications(data)
  }, [data])

  const handleMarkAsRead = () => {
    setNotifications(notifications.map((value) => ({ ...value, readed: true })))
  }

  if (state === 'loading' || state === 'idle') {
    return <div>Cargando...</div>
  }

  if (state === 'error' || !data) {
    return <div>{error?.name}</div>
  }

  return (
    <div className="bg-lightGrayishBlue1 min-h-screen font-plusJakartaSans sm:flex sm:items-center sm:justify-center">
      <div className=" bg-white p-4 sm:w-[734px] sm:px-9 sm:pt-9 sm:pb-0 sm:rounded-lg">
        {/* header */}
        <div className="flex justify-between">
          <h1 className="font-extrabold text-xl flex tracking-normal sm:text-2xl">
            Notifications
            <span className="ml-3  px-3 rounded-lg bg-primaryBlue text-white sm:text-lg sm:flex sm:items-center">
              {notifications.filter((person) => person.readed === false).length}
            </span>
          </h1>
          <button
            onClick={handleMarkAsRead}
            className="text-base text-grayishBlue hover:cursor-pointer hover:text-primaryBlue"
          >
            Mark all as read
          </button>
        </div>
        {/* Notifications */}
        <div className="flex flex-col gap-3 pt-7 sm:gap-2">
          {notifications.map((notification, i) => {
            return <Notification key={i} notification={notification} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
