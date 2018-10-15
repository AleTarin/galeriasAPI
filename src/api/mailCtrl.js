var nodemailer = require('nodemailer')
// email sender function

exports.sendEmail = function (req, res) {
// Definimos el transporter

  console.table(req.body)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vickromero.foto@gmail.com',
      pass: 'A01034854!'
    }
  })
  // Definimos el email
  var mailOptions = {
    from: 'Galerias API',
    to: req.body.contactEmail,
    subject: `Page email from ${req.body.contactName}`,
    text:
    `
    De: ${req.body.contactName}
    Tel: ${req.body.contactTel}
    Date: ${req.body.contactDate}
    Event: ${req.body.contactEvent}
    Social: ${req.body.contactSocial}
    `
  }
  // Enviamos el email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      res.status(500).send(error.message)
    } else {
      console.log('Email sent')
      res.status(200).jsonp(req.body)
    }
  })
}
