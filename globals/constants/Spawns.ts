import type { SpawnRate, SpawnType } from '../types/Spawns.types';

export const SPAWN_TYPE: { [key: string]: SpawnType } = Object.freeze({
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
});

export const SPAWN_RATE: { [key: string]: SpawnRate } = Object.freeze({
  HOURS: 'hours',
  MINUTES: 'minutes',
});
