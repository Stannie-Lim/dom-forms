const customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
];

const list = document.querySelector('ul');


const render = () => {
    const html = customers.map(customer => {
        return `<li>${customer.name} joined on ${customer.dateJoined}</li>`;
    }).join('');
    list.innerHTML = html;
};

render();