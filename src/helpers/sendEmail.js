import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (info) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: `${info.email}`,
      from: 'challenge@example.com',
      subject: 'Invitation',
      text: 'Welcome',
      html: `<p>this is just a welcome quote: 
      We are made for goodness. We are made for love.<br/>
       We are made for friendliness. We are made for togetherness.<br/>
        We are made for all of the beautiful things that you and I know. <br/>
        We are made to tell the world that there are no outsiders. <br/>
        All are welcome: black, white, red, yellow, rich, poor, educated, not educated, male, female, gay, straight, all, all, all. We all belong to this family, this human family, God's family.
        <br/>
        <br/>
        <strong>Email:</strong> ${info.email}, <br/>
        <strong>Password:</strong> ${info.password}</p>`
    };
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
