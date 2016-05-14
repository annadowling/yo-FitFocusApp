/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Post = require('../api/post/post.model');
var Forum = require('../api/forum/forum.model');
var BookClass = require('../api/bookClass/bookClass.model');

Thing.find({}).remove(function () {
  Thing.create({
      name: 'Welcome',
      info: 'Welcome to the Fit Focus Community'
    }, {
      name: 'Learn',
      info: 'Learn where the best classes and gyms to suit your needs are!'
    },
    {
      name: 'Optimize your fitness',
      info: 'Get recommendations from others like you on how to optimize your fitness routine.'
    },
    {
      name: 'Value',
      info: 'Get the best value for your money by researching in the forums'
    },
    {
      name: 'Map',
      info: 'Find locations near to you.'
    }, {
      name: 'Community',
      info: 'Grow a community of quality fitness ratings to get the best out of your gym.'
    });
});

BookClass.find({}).remove(function () {
  BookClass.create({
      day: 'Monday',
      time: '9:00am',
      booked: false
    },
    {
      day: 'Tuesday',
      time: '11:00am',
      booked: false
    },
    {
      day: 'Wednesday',
      time: '9:00am',
      booked: false
    },
    {
      day: 'Thursday',
      time: '11:00am',
      booked: false
    },
    {
      day: 'Friday',
      time: '9:00am',
      booked: false
    },
    {
      day: 'Saturday',
      time: '11:00am',
      booked: false
    });
});

Forum.find({}).remove(function () {
  Forum.create({
      name: 'Anna',
      message: 'Does anyone have any gym recommendations?'
    },
    {
      name: 'Tom',
      message: 'Splashworld is great and cheap too!'
    },
    {
      name: 'Mary',
      message: 'If you dont need a swimming pool Goldstone is great'
    });
});

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});

Post.find({}).remove(function () {
  Post.create({
    title: 'Pilates Class Splashworld Gym Tramore',
    link: 'http://www.splashworld.ie/gym/pilates.html',
    username: 'fituser',
    comments: [],
    upvotes: 10,
    date: new Date('<2016-03-16>')
  }, {
    title: 'Yoga Surfing Freedom Surf School Tramore',
    link: 'http://www.freedomsurfschool.com/surfing/yoga_surf',
    username: 'surferdude',
    comments: [],
    upvotes: 9,
    date: new Date('<2016-03-13>')
  }, {
    title: 'Zumba Fitness Waterford',
    link: 'http://www.zumbawithadriana.com/p/zumba-classes-waterford.html',
    username: 'zumbaaddict',
    comments: [],
    upvotes: 6,
    date: new Date('<2016-03-05>')
  }, {
    title: 'Waterford Road Runners Winter League',
    link: 'http://www.totaltiming.ie/wrr-winter-league/',
    username: 'roadrunner',
    comments: [],
    upvotes: 2,
    date: new Date('<2016-03-03>')
  }, {
    title: 'Crossfit Waterford',
    link: 'http://www.crossfitwaterford.com/crossfit-women/',
    username: 'warrior',
    comments: [],
    upvotes: 7,
    date: new Date('<2016-03-02>')
  }, {
    title: 'Balance Fitness Spinning',
    link: 'http://www.balance.ie/2-spinning-classes-waterford/',
    username: 'spinner',
    comments: [],
    upvotes: 8,
    date: new Date('<2016-03-20>')
  });
});
