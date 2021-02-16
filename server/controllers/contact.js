const path = require('path');

exports.sendEmail = (req,res) => {
  let tanto = {};
  if (Object.keys(req.body).length !== 0) {
    tanto.status = req.body.status === '' ? ' ...' : req.body.status === 'string' ? req.body.status : JSON.stringify(req.body.status);
    tanto.title = req.body.title === '' ? ' ...' : req.body.title === 'string' ? req.body.title : JSON.stringify(req.body.title);
    tanto.fName = req.body.fName === '' ? ' ...' : req.body.fName === 'string' ? req.body.fName : JSON.stringify(req.body.fName);
    tanto.lName = req.body.lName === '' ? ' ...' : req.body.lName === 'string' ? req.body.lName : JSON.stringify(req.body.lName);
    tanto.email = req.body.email === '' ? ' ...' : req.body.email === 'string' ? req.body.email : JSON.stringify(req.body.email);
    tanto.subject = req.body.subject === '' ? ' ...' : req.body.subject === 'string' ? req.body.subject : JSON.stringify(req.body.subject);
    tanto.msg = req.body.msg === '' ? ' ...' : req.body.msg === 'string' ? req.body.msg : JSON.stringify(req.body.msg);
  }
  // req.body:
  // {
  //   status: '',
  //   title: '',
  //   firstName: 'Pino',
  //   lastName: 'Opinel',
  //   email: 'name@eman.com',
  //   subject: '',
  //   message: "Bonjour, ...!"
  // }
  // next: check if each value is a string and send the email.
  
  console.dir(req.body);
  console.dir(Object.keys(req.body).length);
  console.dir(tanto);



  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log('Object missing');
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"success": "OK"}));
  }

}