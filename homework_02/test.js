(() => new Promise(resolve => resolve('promise')))().then(p => console.log(p));
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));