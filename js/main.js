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

// 5-Masala;

// let R = prompt("r sonini kiriting");

// function sum(R){
//     S = PI * Math.pow(R, 2);
//     console.log(S);    
// }

// 6-Masala;

// function sum(a, b){
//     sum = 0
//    for(i = a;  i <= b; i++){
//      sum +=i;
//    }
//    console.log(sum);
// }
// sum(8, 10)

// 7-Masala;

// function calc(A, B, S) {
//   if (S === "+") return A + B;
//   if (S === "-") return A - B;
//   if (S === "*") return A * B;
//   if (S === "/") return A / B;
//   return 0; 
// }

// console.log(calc(10, 15, "*")); 
// console.log(calc(7, 8, "+"));  
// console.log(calc(20, 5, "-"));  
// console.log(calc(20, 4, "/"));  
// console.log(calc(5, 2, "%"));   


// let K = prompt("k sonini kiriting");

// function sum(K){
//     if (K % 2 === 0 ) {
//         alert("true")
//     } else {
//         alert("false")
//     }
// }
// sum(K)

// 9-Masala;

// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));
// let c = Number(prompt("c sonini kiriting"));

// function sum(a, b, c){
//     let katta = Math.max(a, b, c);
//     let kichik = Math.min(a, b, c);
//     let orta = (a + b + c)-(katta + kichik);

//     console.log(kichik, orta, katta);
// }
// sum(a, b, c);

// 10-Masala;


// let k = Number(prompt("k sonini kiriting"));
// let n = Number(prompt("n sonini kiriting"));
// let x = Number(prompt("x sonini kiriting"));

// function sum(k, n, x){
//     if (k === Math.pow(n, x)) {
//         alert("true")
//     } else {
//         alert(false)
//     }
// }
// sum(k, n, x)

// 11-Masala;

// let n = prompt("n sonini kiriting")

// function sum(n){
//     if ( n < 2) {
//         console.log("false");
//     }

//     for (let i = 0; i < n; i++) {
//          if ( n % 2 === 0 ) {
//             console.log("false");
//          } else {
//             console.log("true");
//          }
//          break
//     }
// }
// sum(n)

// 12-Masala;

// let n = +prompt("n sonini kiriting");

// let tub = 0, tubmas = 0;

// for (let num = 2; num <= n; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             isPrime = false; 
//             break; 
//         }
//     }
//     isPrime ? tub++ : tubmas++;
// }

// console.log("Tub:", tub, " Tubmas:", tubmas);

// 13-Masala;




// 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28
 