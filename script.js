const customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
];

const list = document.querySelector('ul');
const button = document.querySelector("button");
const form = document.querySelector("form");

const sortArray = () => {
    customers.forEach(customer => {
        customer.dateJoined = new Date(customer.dateJoined);
    });
    customers.sort((a, b) => a.dateJoined - b.dateJoined);
}


let id = 4;
button.addEventListener("click", (ev) => {
    ev.preventDefault();
    const nameInput = form.querySelector("[name='name']");
    const dateOf = form.querySelector("[name='date']").value;
    const dateOfHireInput = new Date(dateOf);
    const vipOrNot = form.querySelector("[name='vip']").checked;
    customers.push({ 
        id: id,
        name: nameInput.value,
        email: nameInput.value + '@gmail.com',
        dateJoined: dateOfHireInput,
        isVIP: vipOrNot
    });

    id++;
    sortArray();
    render();
});
sortArray();

const render = () => {
    const html = customers.map(customer => {
        const diff = new Date() - customer.dateJoined;
        const msInYear = 1000*60*60*24*365;
        const years = (diff / msInYear).toFixed(2);
        return `<li class='${ customer.isVIP ? 'vip': ''}'>${customer.name} joined on ${customer.dateJoined.toLocaleDateString()} and has been a member for ${years} years.</li>`;
    }).join('');
    list.innerHTML = html;
};

render();