export interface Wedding {
  id: string;
  brideName: string;
  groomName: string;
  date: Date;
}

export interface GuestMessage {
  id: string;
  weddingId: string;
  guestName: string;
  message: string;
  date: Date;
}

export interface AddGuestMessageParams {
  weddingId: string;
  guestName: string;
  message: string;
  date: Date;
}

export interface AddWeddingParams {
  brideName: string;
  groomName: string;
  date: Date;
}
