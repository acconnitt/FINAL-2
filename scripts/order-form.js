const form = document.querySelector('#form');

const processData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(event.target);
    // console.log(data);
    const fullData = Object.fromEntries(data.entries());
    console.log(JSON.stringify(fullData));
}

form.addEventListener('submit', processData);