const path = require('path');
const winston = require('../config/winston');
require("dotenv").config();

exports.sendEmail = (req, res) => {
  let tanto = {}, html = '';
  try {
    if (Object.keys(req.body).length !== 0) {
      tanto.status = req.body.status === '' ? ' ...' : req.body.status === 'string' ? req.body.status : JSON.stringify(req.body.status);
      tanto.title = req.body.title === '' ? ' ...' : req.body.title === 'string' ? req.body.title : JSON.stringify(req.body.title);
      tanto.fName = req.body.fName === '' ? ' ...' : req.body.fName === 'string' ? req.body.fName : JSON.stringify(req.body.fName);
      tanto.lName = req.body.lName === '' ? ' ...' : req.body.lName === 'string' ? req.body.lName : JSON.stringify(req.body.lName);
      tanto.email = req.body.email === '' ? ' ...' : req.body.email === 'string' ? req.body.email : JSON.stringify(req.body.email);
      tanto.subject = req.body.subject === '' ? ' ...' : req.body.subject === 'string' ? req.body.subject : JSON.stringify(req.body.subject);
      tanto.msg = req.body.msg === '' ? ' ...' : req.body.msg === 'string' ? req.body.msg : JSON.stringify(req.body.msg);
    }


    const mailjet = require('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC,process.env.MJ_APIKEY_PRIVATE)
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": tanto.email,
            "Name": "Visitor"
          },
          "To": [
            {
              "Email": process.env.FR_TO,
              "Name": "Valerie"
            }
          ],
          "Subject": tanto.subject,
          "TextPart": "My Mailjet email",
          "HTMLPart": html,
          "CustomID": "AppGettingStartedTest"
        }
        ]
      })
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })
  } catch (e) {
    winston.error(e);
  }

  // req.body:
  // {
  //   status: '',
  //   title: '',
  //   fName: 'Pino',
  //   lName: 'Opinel',
  //   email: 'name@eman.com',
  //   subject: '',
  //   msg: "Bonjour, ...!"
  // }
  // next: check if each value is a string and send the email.

  console.dir(req.body);
  console.dir(Object.keys(req.body).length);
  console.dir(tanto);


  try {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ "success": "OK" }));
    }
  } catch (error) {
    res.status(400);
  }



}