const nodemailer = require("nodemailer")


//Create Email Transporter
const sendEmail = async(subject, message, send_to, sent_from, reply_to) =>{
    const transporter = nodemailer.createTransport ({
       host: process.env.EMAIL_HOST,
       port: 587,
       auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
       },
       tls: {
        rejectUnauthorized:false
       }


    })
    // Options for sending Email
    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject:  subject,
        html: message,
    }
        //Send the email
        transporter.sendMail(options, function (err, info){
            if(err){
                console.log(err)
            }else {
            console.log(info);
            }
        })
};

module.exports = sendEmail