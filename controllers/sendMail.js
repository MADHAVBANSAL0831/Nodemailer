var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const mail = async(req, res) => {
  try {
    const {email, otp} = req.body;


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'xyzhjnjnn.gmail.com',
          pass: ''
        }
      });
      
      var mailOptions = {
        from: 'xyz.gmail.com',
        to: `${email}`,
        subject: 'Sending Email using Node.js',
        text: `Your OTP is ${otp}`
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.send(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.json("Email is Sent")
        }
      });
   }
    catch(error) {
        console.log(error);
        return res.send(error);
    }
}

module.exports = mail;