var config = {
  // Twitter API (Proxy) URL
  baseUrl: 'http://conf2015.openbelgium.be:7890',

  debug: false,
  title: 'Apps for Ghent',

  search: 'from:@AppsForGhent OR @AppsForGhent OR #appsforghent OR #hackdebib',
  // list: 'fullfrontalconf/delegates11', // optional, just comment it out if you don't want it

  timings: {
    showNextScheduleEarlyBy: '5m', // show the next schedule 10 minutes early
    defaultNoticeHoldTime: '10s',
    showTweetsEvery: '20s'
  }
};

// allows reuse in the node script
if (typeof exports !== 'undefined') {
  module.exports = config;
}
