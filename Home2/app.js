 // 1-masala
// let info = prompt("Son kiriting va uni musbat")

// if(info > 0) {
//      document.write("Bu son musbat");
// }
// else {
//      document.write("Bu son manfiy");
// }

// 2-masala
// let num = prompt("Son kiriting va uni toq yoki juft ekanligini tekshiring");

// if(num % 2 == 0) {
//      document.write("Bu son juft");
// }
// else {
//      document.write("Bu son toq");
// }

//  3-masala
// let a = prompt("a Son kiriting");
// let b = prompt("b Son kiriting");

// if(a >= 0 && b >= 0) {
//      document.write("To'g'ri");
// }
// else {
//      document.write("Noto'g'ri");
// }

// 4-masala
// let a = prompt("a Son kiriting");
// let b = prompt("b Son kiriting");
// let c = prompt("c Son kiriting");

// if(a < b && b < c) {
//      document.write("To'g'ri");
// }
// else {
//      document.write("Noto'g'ri");
// }


// 5-masala
// let a = prompt("Son kiriting va uni toq ekanligini tekshiring");
// let b = prompt("Son kiriting va uni toq ekanligini tekshiring");

// if(a % 2 == 0 || b % 2 == 0 ) {
//      document.write("Bu sonlar toq emas");
// }
// else {
//      document.write("Bu sonlar toq");
// }

// 6-masala

// let a = prompt("A sonni kiriting");
// let b = prompt("B sonni kiriting");
// let c = prompt("C sonni kiriting");

// if ((a < b && b < c) || (c < b && b < a)) {
//   document.write("b son " + a + " va " + c + " sonlarning ortasida joylashgan");
// } else {
//   document.write("b son a va c sonlarning o'rtasida joylashgan emas");
// }

// 7-masala
// let a = prompt("Son kiriting va uni toq ekanligini tekshiring");
// let b = prompt("Son kiriting va uni toq ekanligini tekshiring");

// if(a % 2 == 0 || b % 2 == 0 ) {
//      document.write("Bu sonlar toq emas");
// }
// else {
//      document.write("Bu sonlar toq");
// }

// 8-masala

// let a = prompt("a sonni kiriting");
// let b = prompt("b sonni kiriting");
// let c = prompt("c sonni kiriting");
// let d = prompt("d sonni kiriting");


// if(a > 0 && b > 0 && c > 0 && d > 0) {
//      document.write("bu sonlar musbat")
// }
// else {
//      document.write("bu sonlar musbat emas sonlarni togri kiriting")
// }

// 9-masala
// let a = prompt("a sonni kiriting");
// let b = prompt("b sonni kiriting");
// let c = prompt("c sonni kiriting");


// if(a > 0 && b > 0 && c > 0 ) {
//      document.write("bu sonlarning hammasi musbat");
// }
// else if(a > 0 && b > 0 && c < 0) {
//      document.write("bu sonlarning ikkitasi musbat");
// }
// else if(a < 0 && b < 0 && c < 0) {
//      document.write("bu sonlarning hammasi manfiy");
// }
// else {
//      document.write("No'To'g'ri son kiritildi");
// }

// 10-masala
// let info = prompt("Enter hafta raqamlarini kiriting");

// switch(info) {
//      case "1":
//          document.write("Dushanba");
//          break;
//      case "2":
//          document.write("Seshanba");
//          break;
//      case "3":
//          document.write("Chorshanba");
//          break;
//      case "4":
//          document.write("Payshanba");
//          break;
//      case "5":
//          document.write("Juma");
//          break;
//      case "6":
//          document.write("Shanba");
//          break;
//      case "7":
//          document.write("Yakshanba");
//      default: 
//           document.write("Bunday hafta raqami mavjud emas");
// }


// 11-masala

// let company = prompt("telefon kod raqamlarini kiriting");

// if(company == 90 || company == 91 || company == 77) {
//      document.write("Beeline");
// }
// else if(company == 93 || company == 94) {
//      document.write("Ucell");
// }
// else if(company == 99 || company == 95) {
//      document.write("Uzmobile");
// }
// else if(company == 97 || company == 88) {
//      document.write("Ums")
// }
// else {
//      document.write("Bunday telefon kod mavjud emas");
// }

// 12-masala

// let son = Number(prompt("Son kiriting"));

// if(son > 0) {
//      document.write(son + 1);
// }
// else {
//      document.write(son - 1);
// }

// 13-masala

// let son = Number(prompt("Son kiriting"));

// if(son > 0) {
//      document.write(son + 3);
// }
// else {
//      document.write(son - 2);
// }

// 14-masala
// let a = prompt("a Son kiriting");
// let b = prompt("b sonni kiriting")
// if(a < b ) {
//      document.write(b + " son katta");
// }
// else if(a > b) {
//      document.write(a + " son katta");
// }
// else {
//      document.write(" Sonlar xato kiritildi");
// }

// 15-masala

// let son1 = prompt("son kiriting");
// let son2 = prompt("son kiriting");
// let son3 = prompt("son kiriting");

// let engKattaSon;

// if (son1 >= son2 && son1 >= son3) {
//     engKattaSon = son1;
// } else if (son2 >= son1 && son2 >= son3) {
//     engKattaSon = son2;
// } else {
//     engKattaSon = son3;
// }

// document.write("Eng katta son:", engKattaSon);

// 16-masala 

// let son1 = prompt("son kiriting");
// let son2 = prompt("son kiriting");
// let son3 = prompt("son kiriting");

// let engKattaSon;

// if (son1 <= son2 && son1 <= son3) {
//     engKattaSon = son1;
// } else if (son2 <= son1 && son2 <= son3) {
//     engKattaSon = son2;
// } else {
//     engKattaSon = son3;
// }

// document.write("Eng katta son:", engKattaSon);

// 17-masala
// document.getElementById("submitButton").onclick = function() {
//      var gender = document.querySelector('input[name="gender"]:checked');
//      var imageContainer = document.getElementById("imageContainer");
     
//      if (gender) {
//        var genderValue = gender.value;
//        if (genderValue === "male") {
//          imageContainer.innerHTML = '<img src="./imges/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlOF9ib3lfdmVjdG9yX2lsbHVzdHJhdGlvbl9kZXNpZ25faW5fdGhlX3N0eWxlX29mX18xNmFjZjk3YS03ZTM0LTRjNDktOTFmOC1jNzgzNGMxMzI5ZjgucG5n.webp" alt="Erkak rasmi">';
//        } else if (genderValue === "female") {
//          imageContainer.innerHTML = '<img src="./imges/good-advice-from-beautiful-woman_329181-3527.avif" alt="Ayol rasmi">';
//        }
//      } else {
//        alert("Iltimos, jinsni tanlang!");
//      }
//    };

// 18-masala

// let student = prompt("Ballni kiriting");

// if(student == 5) {
//      document.write("500$");
// }

// else if(student == 3 || student == 4) {
//      document.write("300$");
// }
// else if(student == 1 || student == 2) {
//      document.write("Sizga Stipendiya yo'q");
// }

// 19-masala

// let son = prompt("Istalgan son kiriting: ");

// if (son > 0) {
//     if (son % 2 === 0) {
//         document.write("Musbat juft son");
//     } else {
//         document.write("Musbat toq son");
//     }
// } else if (son < 0) {

//     if (son % 2 === 0) {
//         document.write("Manfiy juft son");
//     } else {
//         document.write("Manfiy toq son");
//     }
// } else {
//     document.write("Son 0 ga teng");
// }


// 20-masala

// let year = Number(prompt("Yilni kiriting"));
// let result =  new Date().getFullYear() - year;

// if(result - year)  {
//      document.write(result)
// }
// else {
//      document.write("Yil noto'g'ri kiritildi")
// }

// 21-masala

// let son1 = prompt("Son kiriting");
// let son2 = prompt("Son kiriting");

// // Faqat biri toq son bo'lganligini tekshirish
// if (son1 % 2 !== son2 % 2) {
//     if (son1 % 2 === 1) {
//         document.write(son1 + " toq son.");
//     } else {
//         document.write(son2 + " toq son.");
//     }
// }
//  else {
//     document.write("Ikki sonning ham yoki toq ham yoki juft sonligi bir xil.");
// }

// 22-masala

// let a = prompt("a sonni kiriting");
// let b = prompt("b sonni kiriting");

// if (a % 2 !== b % 2) {
//      if (a % 2 === 1) {
//          console.log(a + " toq son.");
//      } else {
//          console.log(b + " toq son.");
//      }
//  } else {
//      console.log("Ikki sonning ham yoki toq ham yoki juft sonligi bir xil.");
//  }


// 23-masala

// let a = prompt("Istalgan a-son kiriting: ");
// let b = prompt("Istalgan b-son kiriting: ");
// let c = prompt("Istalgan c-son kiriting: ");


// if (a >= 0 && b >= 0 && c >= 0) {
//     document.write("a, b, c sonlari musbat");
// }

// else if (a < 0) {
//     document.write("a  soni manfiy");
// }

// else if (b < 0) {
//     document.write("b  soni manfiy");
// }

// else if (c < 0) {
//     document.write("c  soni manfiy");
// }
// else {
//     document.write("a, b, c sonlari manfiy");
// }
// 24-masala
// let a = prompt("son kiriting");
// let b = prompt("son kiriting");
// let c = prompt("son kiriting");

// if (a > 0) {
//   document.write("a musbat son");
// } else if (b > 0) {
//   document.write("b musbat son");
// } else if (c > 0) {
//   document.write("c musbat son");
// } else {
//   document.write("Hechbir son musbat emas");
// }

// 25-masala
// let first = prompt("Son kiriting");
// let second = prompt("Son kiriting");
// let three = prompt("Son kiriting");

// if(first == second && first == three && second == three) {
//      document.write("Bu 3 ta son bir xil");
// }
// else {
//      document.write("Bu 3 ta son bir xil emas");
// }

// 26-masala

// let x = prompt("Son kiriting");
// let y = prompt("Son kiriting");
// let z = prompt("Son kiriting");
// let temp;

// if (x > y && x > z) {
//   if (y > z) {
//     temp = y;
//     y = z;
//     z = temp;
//   }
// } else if (y > x && y > z) {
//   temp = x;
//   x = y;
//   y = temp;
//   if (y > z) {
//     temp = y;
//     y = z;
//     z = temp;
//   }
// } else {
//   temp = x;
//   x = z;
//   z = temp;
//   if (y > z) {
//     temp = y;
//     y = z;
//     z = temp;
//   }
// }

// document.write("Ketma-ket joylashgan sonlar: " + x + ", " + y + ", " + z);

// 27-masala

// let result = prompt("kompyuter brandini kiriting");

// if(result == "apple") {
//      document.write("1200$");
// }
// else if(result == "samsung") {
//      document.write("1000$");
// }
// else if(result == "asus") {
//      document.write("4000$");
// }
// else if(result == "hp") {
//      document.write("800%");
// }
// else if(result == "lenovo") {
//      document.write("1400$");
// }
// else if(result == "dell") {
//      document.write("500$");
// }
// else if(result == "acer") {
//      document.write("1500$");
// }
// else if(result == "microsoft") {
//      document.write("500$");
// }
// else {
//      document.write("Bunday kompyuter brandi mavjud emas");
// }

// 28-masala

// let numbers = [12, 7, 15, 9, 23, 8];
// let complexNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   let isComplex = false;
//   for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
//     if (numbers[i] % j === 0) {
//       isComplex = true;
//       break;
//     }
//   }
//   if (isComplex) {
//     complexNumbers.push(numbers[i]);
//   }
// }

// document.write("Murakkab sonlar: " + complexNumbers.join(", "));
