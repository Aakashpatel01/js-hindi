shop = {
    employe : {
        empName : "Ashish",
        empId : 101,
        emptime : 9,

        user : {
            userName : "aakash",
            userId : 1,
            userPro : "SwadistOil",

            payment : {
                upiId : "aakash@upi",
                bank : "BOI",
                googlepay : "pay"

            }

        }
    }
}
console.log(shop.employe.user.payment.googlepay);
