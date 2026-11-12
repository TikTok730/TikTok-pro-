import { getToken } from "firebase/messaging";
import { messaging } from "./firebase.js";

export async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "YOUR_PUBLIC_VAPID_KEY_HERE"
      });
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token. ", error);
  }
}
