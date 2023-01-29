import { atom } from 'jotai';
import { DateTime } from 'luxon';

export const selectedDateAtom = atom(DateTime.now());
export const activeDateAtom = atom((get) => get(selectedDateAtom));

export const dailyRoutinesAtom = atom([]);
