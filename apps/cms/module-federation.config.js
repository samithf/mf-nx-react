module.exports = {
  name: 'cms',
  exposes: {
    './create-banner': './src/app/create-banner/create-banner',
    './planned-outage': './src/app/planned-outage/planned-outage',
  },
};
