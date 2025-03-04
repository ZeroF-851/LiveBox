export interface LiveInfoImp {
    room_info: string
    ttwid: string
    unique_id: string
}

export interface DPlayerImp {
    seek: (t: number) => void
    destroy: () => void
    play: () => void
}

export interface MessageImp {
    id: string
    name: string
    msg: string
}

export interface PushMessage {
    type: 'chat' | 'gift' | 'like' | 'follow' | 'comein'
    data: any
    timestamp: number
  }
  
  export interface RecordConfig {
    video: boolean
    chat: boolean
    gift: boolean
  }
