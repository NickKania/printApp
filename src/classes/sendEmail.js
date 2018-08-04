import printerList

export default class sendEmail {
  sendEmail(var type, var id, var messageBody) {

    var mailSubject = '';
    var message = '';
    var sendTo = '';

    if(type == report) {
      mailSubject = id.displayName.concat(" report");
      message = messageBody;
      sendTo = nkania@onshape.com;
    } else {
      mailSubject += id.name + " is " + id.status;
      sendTo = id.usrEmail;
    }



    const nodemailer = require('nodemailer');
    nodemailer.createTestAccount((err,account) => {
      let transporter = nodemailer.createTransport({
        host: ,
        port: ,
        secure: false,
        auth: {
          user: {},
          pass: {}
        }
      });
      let mailOptions = {
        from: '"Print App", printApp@test.com',
        to: sendTo,
        subject: mailSubject,
        text: message
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent");
        console.log("Preview: %s", nodemailer.getTestMessageUrl(info));
      })
    })
  }
}
