import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase.js"; // firebase.js ফাইল থেকে ইম্পোর্ট করা

export async function sendLiveMessage(senderId, receiverId, messageText) {
  try {
    await addDoc(collection(db, "messages"), {
      senderId: senderId,
      receiverId: receiverId,
      text: messageText,
      timestamp: serverTimestamp()
    });
    console.log("Message sent successfully!");
  } catch (e) {
    console.error("Error sending message: ", e);
  }
}
