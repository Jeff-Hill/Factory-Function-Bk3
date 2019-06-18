// Lightning exercise from Joe

// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

// ```function createContact(name, title, email) {
//   let newContact = /// pass name, title, email to contactFactory as an array
//   console.table(Contact)
// }```
// 3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.

function contactFactory(contactData) {
    let contact = {
        name: null,
        title: null,
        email: null
    }
    contact.name = contactData[0]
    contact.title = contactData[1]
    contact.email = contactData[2]

    // for (let i=0; i < contactData.length; i++) {
    //     ///add each arry item to contact
    //     console.log(contactData[i])
    // }
    return contact
}

function createContact (name, title, email) {
    let newContact = [name, title, email]
    let Contact = contactFactory(newContact)
    console.table(Contact)
}
createContact("Jeff", "Student", "jhill@gmail.com")

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor.
// The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = function ( name, specialty, address) {
return {
"doctor_name":name,
"practice_specialty": specialty,
"business_address": address
}
}

const cardiologist = createDoctor("Dr. Smith", "Cardiology", "123 Main St.")

console.log(cardiologist)


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet.
// The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

let BowWowKennels = []
const createPet = function (name, breed) {

    return {
        "Pet_Name": name,
        "Pet_Breed": breed
    }
}
createPetOne = createPet("Leo", "Main Coon")
BowWowKennels.push(createPetOne)

createPetTwo = createPet("Clive", "Main Coon")
BowWowKennels.push(createPetTwo)

creatPetThree = createPet("Casey", "German Shepherd")
BowWowKennels.push(creatPetThree)
console.log(BowWowKennels)