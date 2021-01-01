import type { RegionEnum } from './Regions.types';
import type { SpawnRate, SpawnType } from './Spawns.types';

export type Boss = {
  name: string;
  region: RegionEnum;
  spawnTime: number;
  spawnRate: SpawnRate;
  spawnType: SpawnType;
};

export type BossesArray = Array<Boss>;
