import groupBy from 'lodash/groupBy';

import type { Boss, BossesArray } from './types/Bosses.types';

import { allBosses } from './constants/Bosses';

export const filterBossesByRegion = (): { [key: string]: BossesArray } =>
  groupBy(allBosses, (boss: Boss) => boss.region);

export const formatBossesForList = ():
  | Array<{ title: string; data: BossesArray }>
  | [] => {
  const filteredResults = [];

  for (const [key, value] of Object.entries(filterBossesByRegion())) {
    console.log(key, value);
    filteredResults.push({ title: key, data: value });
  }

  console.log(filteredResults);

  return filteredResults;
};
