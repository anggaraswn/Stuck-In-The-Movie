// import { collection } from "firebase/firestore";
// import * as admin from 'firebase-admin';

import { firestore } from "./firebase";
import { doc, setDoc } from "firebase/firestore"
import * as sprintf from 'sprintf-js';

// admin.initializeApp();

// const db = admin.firestore();

function getLastName(str: string): string{
const lastSpaceIndex = str.lastIndexOf(' ');
return str.substring(lastSpaceIndex + 1);
};

function getFirstName(str: string): string {
const firstSpaceIndex = str.indexOf(' ');
return str.substring(0, firstSpaceIndex);
}




export const seedEmployee = () =>{
var name = 'Anggara Satya Wimala Nelwan';
var fName = getFirstName(name);
var lName = getLastName(name);
setDoc(doc(firestore, 'Employee', 'EMP001'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Manager",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-2551-5990",
salary : 10000000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});
name = 'Dini Putri';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP002'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Human Resource Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4000000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Bima Bagus';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP003'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Accounting and Finance Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Rini Cantika';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP004'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Storage Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 2,
warningLetterCount : 0
});

name = 'Kevin Willieam';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP005'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "External Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 1
});

name = 'Aldi Renaldi';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP006'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Promotion and Event Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 5,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Grace Vania';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP007'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Movie Department - Schedule Division",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Erika Felia';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP008'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Movie Department - Front Office Division",
status: 'Active',
email : `${fName}.${lName}@gmail.com`.toLowerCase(),
username : `${fName}.${lName}`.toLowerCase(),
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Andrew Giovanni';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP009'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Movie Department - Operation Division",
status: 'Active',
email : `${fName}.${lName}@gmail.com`,
username : `${fName}.${lName}`,
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Jason Adiwijaya';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP010'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Café Department - Front Office Division",
status: 'Active',
email : `${fName}.${lName}@gmail.com`,
username : `${fName}.${lName}`,
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Agung Bernard';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP011'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Café Department - Kitchen Division",
status: 'Active',
email : `${fName}.${lName}@gmail.com`,
username : `${fName}.${lName}`,
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});

name = 'Miguel Jonathan';
fName = getFirstName(name);
lName = getLastName(name);

setDoc(doc(firestore, 'Employee', 'EMP012'), {
fName : `${fName}`,
lName : `${lName}`,
name : `${name}`,
dob : "2003-02-12",
role : "Administrator Department",
status: 'Active',
email : `${fName}.${lName}@gmail.com`,
username : `${fName}.${lName}`,
password : "password",
telephone : "0812-3212-3217",
salary : 4500000,
workingTime : 8,
personalLeaveCount : 0,
warningLetterCount : 0
});
}

var FacilitiesEquipmentsCounter = 1;
export function seedFacilitiesEquipments(){
    setDoc(doc(firestore, 'Facilities_Equipments', sprintf.sprintf('FE%03d', FacilitiesEquipmentsCounter)), {
        id: sprintf.sprintf('FE%03d', FacilitiesEquipmentsCounter),
        name: 'TV Samsung 2023',
        last_location: ''

        });
}