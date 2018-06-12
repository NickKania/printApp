import printerList

export default class sendEmail {
  sendEmail(var type, var job, var printerID) {

    if(type == report) {
      var mailSubject = printer.displayName.concat(" report")
      var message = printerID
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
