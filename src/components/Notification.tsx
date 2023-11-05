import { TNotification } from '../types/TNotification'

type Props = {
  notification: TNotification
}

const NOTIFICATIONS_TYPE = {
  REACT: 'reacted to your recent post',
  FOLLOW: 'followed you',
  JOINED_GROUP: 'has joined your group',
  MESSAGE: 'sent you a private message',
  COMMENT: 'commented on your picture',
  LEFT_GROUP: 'left the group'
}

const Notification = ({ notification }: Props) => {
  return (
    <div
      className={`flex ${
        !notification.readed ? 'bg-lightGrayishBlue1' : ''
      } p-4 gap-3 text-xs sm:text-base rounded-xl`}
    >
      {/* avatar */}
      <img className="w-10 h-10" src={notification.avatar} alt="" />

      {/* Notification body */}
      <div className="flex flex-col gap-1">
        <p className="text-darkGrayishBlue">
          <span className="text-black font-extrabold">
            {/* Name*/}
            {notification.name}
          </span>
          {/* Description */}
          {' ' + NOTIFICATIONS_TYPE[notification.description.type]}

          {notification.description.from && (
            <a
              href="#"
              className="font-extrabold hover:cursor-pointer hover:text-primaryBlue"
            >
              {' ' + notification.description.from}
            </a>
          )}

          {/* readed */}
          {!notification.readed && (
            <span className="inline-block w-2 h-2 ml-2 bg-primaryRed rounded-full"></span>
          )}
        </p>

        {/* time */}
        <span className="text-grayishBlue"> {notification.time} </span>

        {/* message */}
        {notification.description.message && (
          <a
            href="#"
            className="p-5 mt-4 border rounded-md text-darkGrayishBlue border-grayishBlue hover:bg-lightGrayishBlue1 hover:cursor-pointer"
          >
            {notification.description.message}
          </a>
        )}
      </div>

      {/* Picture */}
      {notification.description.picture && (
        <a href="#" className="ml-auto cursor-pointer">
          <img className="w-10" src={notification.description.picture} />
        </a>
      )}
    </div>
  )
}

export default Notification
