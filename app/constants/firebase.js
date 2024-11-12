import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCALbU1ilA1O9ZOEP8A1_6gLHqzWfOuFIk",
    authDomain: "axiom-528ab.firebaseapp.com",
    projectId: "axiom-528ab",
    storageBucket: "axiom-528ab.appspot.com",
    messagingSenderId: "788965920996",
    appId: "1:788965920996:web:a4fb1e2abf626159ff5cf1",
    measurementId: "G-E4M3F5JNZY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadSingleFile = ({ file, folderName = "uploads", setProgress }) => {
    return new Promise((resolve, reject) => {
        if (!file) return reject("No file provided");
        
        const storageRef = ref(storage, `/${folderName}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (error) => {
                console.log("Upload error:", error);
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL); // Resolve the Promise with the URL
                } catch (error) {
                    console.log("Failed to get download URL:", error);
                    reject(error);
                }
            }
        );
    });
};
