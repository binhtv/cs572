const checkSystem = require('./checkSystem');
const { Subject } = require('rxjs');
const subject = new Subject();

subject.subscribe(checkSystem);

setInterval(() => subject.next('check'), 1000);