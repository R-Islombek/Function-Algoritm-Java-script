// 1-Masala

// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));

// function sum(a, b) {
//     let S = a * b;          
//     let L = 2 * (a + b);    

//     console.log("Yuza:", S);
//     console.log("Perimetr:", L);
// }

// sum(a, b);

// 2-Masala;

// let a = prompt("a sonini kiriting");

// function sum(a){
//     let S = (Math.sqrt(3) / 4) * Math.pow(a, 2);
//     let L = 3 * a;

//     console.log("Uchburchak yuzasini toping =",S , "Uchburchak pirametiri =", P);

// }

// 3-Masala;

// let n = prompt("n sonini kiriting");

// function sum(n){
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         sum+=i; 
//     }
//     console.log(sum);
// }
// sum(n)

// 4-Masala;

// function isSquare(k) {
//   let sqrt = Math.sqrt(k);
//   return sqrt === parseInt(sqrt);
// }


// console.log(isSquare(16));  
// console.log(isSquare(20)); 
// console.log(isSquare(25)); 

// 5-Masala;

// let k = prompt("k sonini kiriting");

// function sum(k){
//     let count = k.toString().length;
//     console.log(count);
// }
// sum(k);

// 6-Masala;

// let n = prompt("n sonini toping");
// let n = 456


// function sum(n) {
//     let c = Math.floor((n / 10) % 10);
//     let a = Math.floor(n % 10);
//     let b = Math.floor(n / 100);
    
//     console.log(c, b, a);
// }
// sum(n)

// 7-Masala;

// function timeToHMS(T) {
//   let H = Math.floor(T / 3600);          
//   let M = Math.floor((T % 3600) / 60);   
//   let S = T % 60;                        

  
//   if (H < 10) H = "0" + H;
//   if (M < 10) M = "0" + M;
//   if (S < 10) S = "0" + S;

//   return `${H}:${M}:${S}`;
// }

// console.log(timeToHMS(400));   
// console.log(timeToHMS(3661)); 

// 8-Masala;

// Uyga vazifadan;

// 1-Masala

// let a = prompt("a sonini kiriting");
// let n = prompt("n sonini kiriting");

// let c = Math.pow(a, n);

// console.log(c);

// 2-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");

// function sum(a, b){
//     let P = (a + b) / 2;
//     let G = Math.sqrt(a + b);

//     console.log("Pirametiri =", P,  "Geometigi =", G);
// }
// sum(a, b);

// 3-Masala;

// let a = prompt("a sonini kiriting");
// function sum(a){
//    if (a > 0) {
//       console.log("1");
      
//    } else if(a < 0) {
//       console.log("-1");
//    }
//    else{
//     console.log("0");
//    }
// }
// sum(a);

// 4-Masala;

// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));
// let c = Number(prompt("c sonini kiriting"));

// D = Math.pow(b, 2) - 4 * a * c;

// if (D > 0) {
//      console.log("2 ta yechim bor");
     
// } else if(D === 0 ) {
//     console.log("1 ta yechim bor ");
// }else{
//     console.log("Yechimga ega emas");
// }