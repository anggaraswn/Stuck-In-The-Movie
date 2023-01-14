import { async } from "@firebase/util";
import {
    collection,
    getDocs,
    query,
    setDoc,
    where,
    doc,
    addDoc,
    updateDoc,
    Firestore,
} from "firebase/firestore";
import { firestore, app } from "./firebase";
import * as sprintf from "sprintf-js";

export var employeeCounter = 13;
var warningLetterCounter = 1;

function getLastName(str: string): string {
    const lastSpaceIndex = str.lastIndexOf(" ");
    return str.substring(lastSpaceIndex + 1);
}

function getFirstName(str: string): string {
    const firstSpaceIndex = str.indexOf(" ");
    return str.substring(0, firstSpaceIndex);
}

export async function getEmployee() {
    var array = [];
    const q = collection(firestore, "Employee");

    const data = await getDocs(q).then((item) => {
        item.docs.map((e) => {
            array.push(e.data());
        });
    });

    return array;
}

export async function getEmployeeByusername(username: string) {
    var array = [];
    const q = collection(firestore, "Employee");

    const queryLogin = query(q, where("username", "==", username));

    const data = await getDocs(queryLogin).then((item) => {
        item.docs.map((e) => {
            array.push(e.data());
        });
    });

    return array[0];
}

export function InsertEmployee(
    name: string,
    dob: string,
    role: string,
    salary: number,
    email: string,
    telephone: string,
    username: string
) {
    const fName = getFirstName(name);
    const lName = getLastName(name);

    setDoc(
        doc(firestore, "Employee", sprintf.sprintf("EMP%03d", employeeCounter)),
        {
            fName: `${fName}`,
            lName: `${lName}`,
            name: `${name}`,
            dob: dob,
            role: role,
            email: email,
            status: "Active",
            username: username,
            password: "password",
            telephone: telephone,
            salary: salary,
            workingTime: 8,
            personalLeaveCount: 0,
            warningLetterCount: 0,
        }
    );
}

export function InsertWarningLetter(employee: string, desc: string) {
    const c = collection(firestore, "Warning Letter");
    addDoc(c, {
        id: warningLetterCounter,
        employeeUsername: employee,
        description: desc,
        status: "No status",
    });
    warningLetterCounter++;
}

// export async function getWarningLettersToApprroveReject(){
// var array = [];
// const q = collection(firestore, 'Warning Letter');

// const data = await getDocs(q).then((item) => {
// item.docs.map(e => {
// array.push(e.data());
// });
// });

// return array;
// }

export async function getWarningLettersToApprroveReject() {
    var array = [];
    const q = collection(firestore, "Warning Letter");

    const queryLogin = query(q, where("status", "==", "No status"));

    const data = await getDocs(queryLogin).then((item) => {
        item.docs.map((e) => {
            array.push(e.data());
        });
    });

    return array;
}

export async function updateWarningLetter(sts: string, id: number) {
    const q = collection(firestore, "Warning Letter");
    const queryGetWarningLetter = query(q, where("id", "==", id));
    await getDocs(queryGetWarningLetter).then((i) => {
        i.docs.map((e) => {
            updateDoc(doc(firestore, "Warning Letter", e.id), { status: sts });
        });
    });
}

export async function updateWarningLetterCount(
    username: string,
    count: number
) {
    var newCount = count + 1;
    const q = collection(firestore, "Employee");
    const queryGetWarningLetter = query(q, where("username", "==", username));
    await getDocs(queryGetWarningLetter).then((i) => {
        i.docs.map((e) => {
            updateDoc(doc(firestore, "Employee", e.id), {
                warningLetterCount: newCount,
            });
        });
    });
}

export async function getWarningLetterCount(employeeUsername: string) {
    var array = [];
    const q = collection(firestore, "Employee");

    const queryGetCounter = query(q, where("username", "==", employeeUsername));

    await getDocs(queryGetCounter).then((item) => {
        item.forEach((e) => {
            array.push(e.data());
        });
        // item.docs.map((e) => {
        //     array.push(e.data());
        // });
    });

    return array[0];
}

var terminationLetterCount = 1;

export function InsertTerminationLetter(empUsername: string) {
    setDoc(
        doc(
            firestore,
            "Termination Letter",
            sprintf.sprintf("TEL%03d", terminationLetterCount)
        ),
        {
            id: terminationLetterCount,
            employeeUsername: empUsername,
            status: "No status",
        }
    );
    terminationLetterCount += 1;
}

export async function getTerminationLetter(employeeUsername: string) {
    var array = [];
    const q = collection(firestore, "Employee");

    const queryGetCounter = query(q, where("username", "==", employeeUsername));

    await getDocs(queryGetCounter).then((item) => {
        item.forEach((e) => {
            array.push(e.data());
        });
        // item.docs.map((e) => {
        //     array.push(e.data());
        // });
    });

    return array[0];
}

export async function getTerminationLettersToApprroveReject() {
    var array = [];
    const q = collection(firestore, "Termination Letter");

    const queryLogin = query(q, where("status", "==", "No status"));

    await getDocs(queryLogin).then((item) => {
        item.docs.map((e) => {
            array.push(e.data());
        });
    });

    return array;
}

export async function updateTerminationLetter(sts: string, id: number) {
    const q = collection(firestore, "Termination Letter");
    const queryGetWarningLetter = query(q, where("id", "==", id));
    await getDocs(queryGetWarningLetter).then((i) => {
        i.docs.map((e) => {
            updateDoc(doc(firestore, "Termination Letter", e.id), {
                status: sts,
            });
        });
    });
}
