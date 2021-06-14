const firstGreeting = name => {
    return `Good Morning ${name}`;
};

const secondGreeting = name => {
    return `Top of the Morning ${name}`;
};

module.exports = { firstGreeting, secondGreeting, message: "Hi!" }; // Older syntax of JS
// export default firstGreeting;               // ES6 Format

// const num = 9,
//     newNum = 10;
// let d = { num, newNum };
// const dict = { name: "Vishwas", age: 24 };

// let { name: myName } = dict;
// console.log(myName);
