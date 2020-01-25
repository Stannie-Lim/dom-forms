const customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
];

const list = document.querySelector('ul');


const render = () => {
    const html = customers.map(customer => {
        const dateOfHire = customer.dateJoined;
        const date = new Date(dateOfHire);
        const diff = new Date() - date;
        const msInYear = 1000*60*60*24*365;
        const years = (diff / msInYear).toFixed(2);
        return `<li class='${ customer.isVIP ? 'vip': ''}'>${customer.name} joined on ${customer.dateJoined} and has been a member for ${years} years.</li>`;
    }).join('');
    list.innerHTML = html;
};

render();