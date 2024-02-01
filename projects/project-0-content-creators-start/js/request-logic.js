// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

//just to see the testing and all see test and understand how to do
//so once done function go to terminal root directory then run npm install(all the dependencies) then run npm run tests will run tests
//see test.js once
//to run all go to terminal root directory then run npm test(so ls and go then ending cd..)
//also see package.json script change to run mocha as test

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  switch(extension){//will get the extension
    case 'html':
      return 'text/html';
      break;
    case 'css':
      return 'text/css';
      break;
    case 'jpg':
      return 'image/jpeg';
      break;
    case 'jpeg':
      return 'image/jpeg';
      break;
    default:
      return 'text/plain'
  }//shd return the content type
}