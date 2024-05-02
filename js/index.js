// 1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.
 const name = prompt("Enter your name :");
 console.log("Salam, ",name,"!");



//// 2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
// kodda sabit olaraq qeyd edin.
// const year = prompt("Enter your birthyear :");
// const date = new Date();
// console.log("Current Year :",date.getFullYear());
// console.log("Your Age :",date.getFullYear()-year);



//// 3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap edin.
// const side = prompt("Enter square's side :");
// console.log("Square's Perimetr :",side * 4);



//// 4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.
// const radius = prompt("Enter radius :");
// console.log("Circle's area :",radius * 2,"Π");



//// 5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
//// istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.
// const distance = prompt("Enter distance :");
// const time = prompt("Enter time :");
// console.log("Your speed must be ",distance / time,"km/h to reach destination");



//// 6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
//// Valyuta məzənnəsini bir sabitdə saxlayın.
// const dollar = prompt("Enter dollar amount :");
// const euro = dollar * 0.93;
// console.log(dollar,"dollar = ",euro,"euro");



//// 7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
//// faylların neçəsinin flash sürücünə sığacağını hesablayır.
// const gb = prompt("Enter GB amount :");
// const mb = gb * 1000;
// let result = (mb / 820).toString();
// console.log(result);
// let result_ = " ";
// for (let i = 0;i < result.length;i = i + 1) {
//     if(result[i] != "."){
//         result_ += result[i];
//         continue;
//     }
//     else break;
// }

// console.log("In ",gb," Gigabytes you can replace ",result_," flash drives with 820 mb");



//// 8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
//// istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir.
// const money = prompt("Enter money amount :");
// const chocolateValue = prompt("Enter chocolate's cost :");

// const count = (money / chocolateValue).toString();
// const residue = (money % chocolateValue).toString();

// let result = " ";

// for(let i = 0;i < count.length;i += 1){
//     if(count[i] != "."){
//         result += count[i];
//         continue;
//     }
//     else break;
// }

// console.log("count of chocolate you can buy : ",result);
// console.log("qaliq pul :",residue," cents");



//// 9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
//// operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı).
//// const num = prompt("Enter Your number :").toString();

// if(num.includes(".")){
//     console.log("Enter Only int values !");
// }

// else {
//     let result = " ";
//     for(let i = 0 ; i < num.length ; i += 1){
//         let digit = num[num.length-i-1];
//         result += digit; 
//     }
//     console.log('result :>> ', result);
// }



//// 10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
//// edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
//// etməyiniz tələb olunur

// let number = prompt("Enter number :");
// number = Number(number);

// function isEvenOrOdd(num){
//     if(num % 2 == 0) return true;
//     else return false;
// }

// if(isEvenOrOdd(number)){
//     console.log(number," cutdur !");
// }

// else{
//     console.log(number," tekdir !");
// }