export type Reservation = {
  id?: string;
  roomNumber: string;
  reserverRoom: string;  // Room number of the person making the reservation
  startTime: string;
  endTime: string;
  description: string;
  createdAt: string;
  status: 'upcoming' | 'past';
  isOpenInvite?: boolean; // Whether the event is open for other residents to join
};

export const ROOM_OPTIONS = {
  'foyer': 'Foyer / Projector Room',
  'party': 'Party Room',
  'rooftop': 'Rooftop Terrace',
  'guest': 'Guest Room (next to entrance)'
} as const;

export type RoomType = keyof typeof ROOM_OPTIONS;

// Rooms that can be selected for a NEW reservation. Rooftop and guest room are
// intentionally excluded so they're no longer bookable, while remaining in
// ROOM_OPTIONS so existing reservations still display in the calendar and lists.
export const BOOKABLE_ROOM_OPTIONS: Partial<Record<RoomType, string>> = {
  'foyer': ROOM_OPTIONS.foyer,
  'party': ROOM_OPTIONS.party,
};
