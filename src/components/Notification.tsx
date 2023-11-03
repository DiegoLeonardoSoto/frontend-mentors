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
            <span className="font-extrabold hover:cursor-pointer hover:text-primaryBlue">
              {' ' + notification.description.from}
            </span>
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
          <p className="p-5 mt-4 border rounded-md text-darkGrayishBlue border-grayishBlue">
            {notification.description.message}
          </p>
        )}
      </div>

      {/* Picture */}
      {notification.description.picture && (
        <img
          className="w-10 h-10 ml-auto"
          src={notification.description.picture}
        />
      )}
    </div>
  )
}

export default Notification
