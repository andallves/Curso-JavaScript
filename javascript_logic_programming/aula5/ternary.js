// Ternary Operator

// (Conditional) ? value for true : value for false
const userPontuation = 1000
const userCategory = userPontuation >= 1000 ? 'Vip Client' : 'Regular Client'; // You can to use this, when you will assing a value to variable and the value change depending of condicional
console.log(userCategory)

// This is used when you want to assing a default value to variable
const userColor = null;
const defaultColor = userColor || 'Black' // Fallback(default value)
// If the user haven't chosen the color value I use the default color
console.log(defaultColor)



