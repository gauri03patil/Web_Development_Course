let x = 12;

console.log("outside the block", x);

{
  let x = 22;
  console.log("insde bloc", x + 10);
}

//let x= 11
/* When we uncomment this code it will throw redeclaration error
    Cannot redeclare block-scoped variable 'x'
 */

//let is similar to const but in const we can change its value
