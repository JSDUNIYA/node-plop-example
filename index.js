import nodePlop from 'node-plop';
import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));

// load an instance of plop from a plopfile
const plop = await nodePlop(`./plopfile.js`);
// get a generator by name
const basicAdd = plop.getGenerator('post');

// run all the generator actions using the data specified

basicAdd.runActions({description:argv.description, title: argv.title}).then(function (results) {
  console.log(results.failures.length)
  if(results.failures.length === 0){
    console.log(results.changes)
     console.log(`SUCCESSFULLY CREATED at ${results.changes[0].path}`);
  } else {
    console.log(results.failures)
  }
  });
  