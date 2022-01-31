export const environment = {
  production: true,
  LogLevel: 5,
  color: {
    main: '#9d0cb9',
    secondary: '#3123ae',
    tertiary: '#515585' 
  },

  colors: {
    pie: ['#a53392', '#3123ae', '#2F2D2E', '#515585', '#d5c6e0', '#43699a', '#b0bec5', '#a12362', '#070707']
  },

  mocksEndpoints: {
    dashboardInfo: '/assets/mocks/dashboardinfo.json',
    NumberStories: '/assets/mocks/NumberStories.json',
    cardbox1: '/assets/mocks/cardbox1.json',
    chart4mock: '/assets/mocks/chartRosemock.json',
    chart5mock: '/assets/mocks/chart5mock.json'
  },

  statsParams: {
    mitre: '5MITRE',
    categories: '5CATEGORIES',
    threats: '5THREATS'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

