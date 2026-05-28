function checkPassword() {
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    if (pass === "1234") { // এখানে তোর পছন্দের পাসওয়ার্ড দিবি
        window.location.href = "files.html"; // ফাইল পেজের লিঙ্ক
    } else {
        msg.innerHTML = "ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।";
        msg.style.color = "red";
    }
}
