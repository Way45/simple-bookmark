import { Meteor } from 'meteor/meteor';
import "../lib/collections.js";
import "../lib/router.js";
import "./seed.js"
import "./publication.js"

Meteor.startup(() => {
  // code to run on server at startup
});
