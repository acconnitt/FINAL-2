const form = document.querySelector('#form');



const processData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(event.target);
    // console.log(data);

    // //Same as const fullData
    // for (item of data){
    //     console.log(item);
    // }

    const fullData = Object.fromEntries(data.entries());
    console.log(JSON.stringify(fullData));


    localStorage(setItem('form', fullData));
    

    for (key in obj) {
        const markup = ` 
        <div>
            <span> ${key}: ${obj[key]} </span>  
        </div> 
        `;
        document.getElementById(data).innerHTML += markup;
    }
}



form.addEventListener('submit', processData);


const json = localStorage.getItem('#form');
const obj = JSON.parse(json);