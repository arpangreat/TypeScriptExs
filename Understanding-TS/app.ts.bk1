
enum Permission { ADMIN , READ_ONLY , AUTHOR };

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    permission: any;
} = {
    name: "Swastik Acharyya",
    age: 18,
    hobbies: ['Sports','Poetry'],
    role: [1,'Author'],
    permission: Permission.ADMIN
};




const pname = console.log(person.name);
const page = console.log(person.age);
 
for (const hobby of person.hobbies) {
        console.log(hobby);
}

for (const roles of person.role) {
        console.log(roles);
}

if (person.permission === Permission.ADMIN) {
   console.log("is Admin");
} else if (person.permission === Permission.AUTHOR) {
   console.log("is Author");
} else {
    console.log("READ ONLY User");
}
