const mailchimp = require('mailchimp-api-v3');


const mailchimpClient = new mailchimp(process.env.MAIL_CHIMP_API_KEY);

const subscribe = async (req,res) => {
    const email =  req.body.email
    const name =  req.body.name

    try{
        const mail = await mailchimpClient.post(`/lists/${process.env.MAIL_LIST_ID}/members`, {
            email_address: email,
            status: 'subscribed',
            merge_fields:{
                FNAME: name,
            }
          });
          console.log(mail)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {subscribe}