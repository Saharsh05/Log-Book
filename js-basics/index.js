        // This is my first Js code
    console.log("Hello World");

    let name = 'Saharsh'; 
    console.log(name);


    // if you need to reassign a variable use let if not always use const
    let interestRate = 0.3;
    interestRate = 1; 
    console.log(interestRate);

    // Primative Types

    let firstname = 'Saharsh'; // String Literal
    let age = 20; // Number literal
    let isApproved = true; //Boolean Literal
    let lastName = undefined;
    let middleName = null; 

    // Objects

    let person = {
        name: 'Saharsh',
        age: '20'
    };

    // Dot notation
    person.name = 'Simon';

    // Bracket notation
    person['name'] = 'Mary';

    console.log(person.name);

    // Arrays- a data strucutre we use to represent a list of items

    let selectedColours = ['red', 'blue'];
    selectedColours[2] = 1;
    console.log(selectedColours.length);

    // Functions

    // Performing a task
    function greet(name, lastName) {
        console.log(`Hello ${name} ${lastName}`);
    }

    // Calculating a value
    function square(number) {
        return number * number;
    } 
    
    console.log(square(2));
    greet('Saharsh', 'Didigam');
    greet('Simon', 'Smith');