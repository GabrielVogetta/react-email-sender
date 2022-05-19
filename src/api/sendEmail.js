import config from './config';

export default async function sendEmail({to, subject, text}){
    
    const request = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: to,
            subject: subject,
            text: text,
        })
    })
    return await request.json();
}