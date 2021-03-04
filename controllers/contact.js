const path = require('path');
const jade = require('jade');
const fs = require('fs');
const winston = require('../config/winston');
require("dotenv").config();

exports.sendEmail = (req, res) => {
  try {

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

      res.status(400);

    } else {
      try {
        let tentos = {};
        let html = '';
        if (Object.keys(req.body).length !== 0) {
          tentos.status = req.body.status === '' ? ' ...' : req.body.status === 'string' ? req.body.status : JSON.stringify(req.body.status);
          tentos.title = req.body.title === '' ? ' ...' : req.body.title === 'string' ? req.body.title : JSON.stringify(req.body.title);
          tentos.fName = req.body.fName === '' ? ' ...' : req.body.fName === 'string' ? req.body.fName : JSON.stringify(req.body.fName);
          tentos.lName = req.body.lName === '' ? ' ...' : req.body.lName === 'string' ? req.body.lName : JSON.stringify(req.body.lName);
          tentos.email = req.body.email === '' ? ' ...' : req.body.email === 'string' ? req.body.email : JSON.stringify(req.body.email);
          tentos.subject = req.body.subject === '' ? ' ...' : req.body.subject === 'string' ? req.body.subject : JSON.stringify(req.body.subject);
          tentos.msg = req.body.msg === '' ? ' ...' : req.body.msg === 'string' ? req.body.msg : JSON.stringify(req.body.msg);
          setHtml(tentos);
        }

        function setHtml(tentos) {
          fs.readFile(path.resolve(__dirname, '../views/temp-msg.jade'), 'utf8', function (err, data) {
            console.log('test__2::');
            if (err) {
              console.error('ERROR_ __XXX')
              winston.error(err);
              return;
            }
            console.log('data::');
            console.log(data);
            console.log("**************************************************************************");
            console.log('tentos');
            console.log(tentos);
            let fn = jade.compile(data);
            html = fn({ tento: tentos });
            console.log('html::');
            console.log(html);
            console.log('__________________________________________________________________________')
            sendTheEmail(html)
          });
        }



        function sendTheEmail(html) {
          const mailjet = require('node-mailjet')
            .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
          const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
              "Messages": [
                {
                  "From": {
                    "Email": process.env.FR_OM,
                    "Name": "Visitor"
                  },
                  "To": [
                    {
                      "Email": process.env.FR_TO,
                      "Name": "Valerie"
                    }
                  ],
                  "Subject": tentos.subject,
                  "TextPart": "My Mailjet email",
                  "HTMLPart": html,
                  "CustomID": "AppGettingStartedTest"
                }
              ]
            })
          request
            .then((result) => {
              console.log('send mail');
              console.log(result.body);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ "success": "OK" }));
            })
            .catch((e) => {
              console.error('error send mail')
              console.log(err.statusCode)
              winston.error(e);
              return;
            })
        }



      } catch (e) {
        winston.error(e);
      }

      console.dir(req.body);
      console.dir(Object.keys(req.body).length);
      console.dir(tentos);

    }

  } catch (e) {
    winston.error(e)
  }
}
