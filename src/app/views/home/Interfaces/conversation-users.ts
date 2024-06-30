export interface Conversation {
  room_id: number,
  messages: {
    user_id: number,
    message_id: number,
    viewed: boolean,
    name_user: string,
    message: string,
    created_at: Date,
    updated_at: Date
  }
}
