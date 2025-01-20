console.log(userDetails);
console.log(userDetails.name);
console.log(type(userDetails));

let x=JSON.stringify(userDetails);
console.log(x);
console.log(x.name);
console.log(type(x));

let y=JSON.parse(x);
console.log(x);

localStorage.setItem("user1","Raghu");
localStorage.setItem("user2","karthik");
localStorage.setItem("user3","neeraj");
localStorage.setItem("user4","kanna");
localStorage.setItem("user5","vishnu");
 let user7= localStorage.getItem("user7");
 console.log(user7);
 localStorage.removeItem("user1");