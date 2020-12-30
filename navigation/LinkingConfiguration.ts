import * as Linking from 'expo-linking';

const config = {
  screens: {
    Root: {
      screens: {
        TabOne: {
          screens: {
            TabOneScreen: 'one',
          },
        },
        TabTwo: {
          screens: {
            TabTwoScreen: 'two',
          },
        },
      },
    },
    NotFound: '*',
  },
}

export default {
  prefixes: [Linking.makeUrl('/')],
  config
};
