export type TNotification = {
  name: string
  avatar: string
  description: {
    type:
      | 'REACT'
      | 'FOLLOW'
      | 'JOINED_GROUP'
      | 'MESSAGE'
      | 'COMMENT'
      | 'LEFT_GROUP'
    from: string
    picture: string
    message: string
  }
  time: string
  readed: boolean
}
