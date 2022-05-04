export default async function sendEmail({to, subject, text}){
    
    const endpoint = 'https://node-email-sender-gves.herokuapp.com/';
    
    const request = await fetch(endpoint, {
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