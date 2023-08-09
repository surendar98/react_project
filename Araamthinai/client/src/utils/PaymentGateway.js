import axios from 'axios';

const savePayment=(paymentId)=>{
    axios.post('http://localhost:5000/api/payment', {paymentId});
     
}
export default async function displayRazorpay(amount) {
 const data = await axios.post('http://localhost:5000/api/razorpay', { amount });
console.log(data)
  const options = {
    key: 'rzp_test_gs1ywZ6rimzbAP',
    currency: data.data.currency,
    amount: data.data.amount,
    name: "Test",
    description: "Wallet Transaction",
    image: "http://localhost:5000/logo.png",
    order_id: data.data.id,
    handler: function (response) {
      console.log("PAYMENT ID ::" + response.razorpay_payment_id);
      savePayment(response.razorpay_payment_id);
       // console.log("ORDER ID :: " + response.razorpay_order_id);
      alert("Payment Success")
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
