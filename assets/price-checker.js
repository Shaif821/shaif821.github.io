// Predefined prices, edit these to change the prices
let definedPrices = {
    seo_1: 1500,
    goal_3: 1000,
    design_1: 150,
    design_2: 300,
    pages: 500,
    development: [100, 200, 300],
    experience: 100,
}

// Total price calculate for the user, base for all options = 0
let totalPrice = {
    seo: 0,
    design: 0,
    pages: 0,
    development: 0,
    experience: 0
}

// id can be changed in the frontend! extra check to make sure only there ids are been checked.
let definedId = ['seo_1', 'design_1', 'design_2'];

// Listen to each button
document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        if (definedId.includes(event.target.id)) {
            appendPrice(event);
        } else {
            //User has chosen for a option which has no value. If previously selected, hide this time
            document.getElementById(event.target.name).style.display = 'none';
            totalPrice[event.target.name] = 0;
            updateTotalPrice();
        }
    })
})

// Append the price chosen by the user to their options
function appendPrice(answer) {
    let subject = answer.target.name;
    totalPrice[subject] = definedPrices[answer.target.id]

    // Showcase the option with price
    document.getElementById(subject).style.display = 'flex';
    document.getElementById(subject).classList.add('animate__bounceIn')
    $('#price__' + subject).text(totalPrice[subject])
    updateTotalPrice();
}

// Get the total sum of their options
function updateTotalPrice() {
    let total = 0;
    for (let price in totalPrice) {
        total += totalPrice[price];
    }

    $('#totalPrice').text(total > 0 ? total : '');
}
