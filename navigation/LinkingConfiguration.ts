import * as Linking from 'expo-linking';

const config = {
  screens: {
    Root: {
      screens: {
        Home: {
          screens: {
            HomeTabScreen: 'home',
          },
        },
        Bosses: {
          screens: {
            BossesTabScreen: 'bosses',
          },
        },
        Settings: {
          screens: {
            SettingsTabScreen: 'settings',
          },
        },
      },
    },
    NotFound: '*',
  },
};

export default {
  prefixes: [Linking.makeUrl('/')],
  config,
};
