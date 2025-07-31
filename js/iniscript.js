// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPrYh3bcdrYljdefSHr33PEaVtfjqY6-A",
    authDomain: "deterdesh.firebaseapp.com",
    projectId: "deterdesh",
    storageBucket: "deterdesh.appspot.com",
    messagingSenderId: "33379451125",
    appId: "1:33379451125:web:5a6c08bcee3cef363545bc"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const commentForm = document.getElementById('comment-form');


// Submit comment form
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username').value;
    const commentText = document.getElementById('comment-text').value;

    if (userName.trim() !== "" && commentText.trim() !== "") {
        db.collection('comments').add({
            username: userName,
            comment: commentText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            document.getElementById('username').value = '';  // Kosongkan input Nama
            document.getElementById('comment-text').value = '';  // Kosongkan input Komentar
        }).catch(error => {
            console.error("Error adding comment: ", error);
        });
    } else {
        alert("Nama dan Komentar tidak boleh kosong!");
    }
});

// Fungsi untuk submit komentar utama
function submitComment() {
    const userName = document.getElementById('username').value;
    const commentText = document.getElementById('comment-text').value;

    if (userName.trim() !== "" && commentText.trim() !== "") {
        db.collection('comments').add({
            username: userName,
            comment: commentText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            document.getElementById('username').value = '';  // Kosongkan input Nama
            document.getElementById('comment-text').value = '';  // Kosongkan input Komentar
        }).catch(error => {
            console.error("Error adding comment: ", error);
        });
    } else {
        alert("Nama dan Komentar tidak boleh kosong!");
    }
}


// Fungsi untuk menampilkan komentar dan balasan
function displayComments() {
    db.collection('comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        document.getElementById('comments-section').innerHTML = ''; // Bersihkan tampilan
        snapshot.forEach(doc => {
            const commentData = doc.data();
            const commentId = doc.id;

            // Buat HTML untuk komentar utama
            let commentHTML = `
            <div class="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 class="text-lg font-semibold text-gray-400 mb-2">${commentData.username}</h4>
                <p class="text-gray-100">${commentData.comment}</p>
                <small class="text-gray-400">${new Date(commentData.timestamp.seconds * 1000).toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</small>
                <button class="text-blue-500 ml-4" onclick="showReplyForm('${commentId}')">Balas</button>
                <div id="replies-${commentId}" class="mt-4 pl-4 border-l-2 border-gray-200"></div>
            </div>
            <div id="replyForm-${commentId}" class="hidden mt-4">
                <input type="text" id="replyName-${commentId}" placeholder="Nama Anda" class="w-full p-2 border rounded-md mb-2 bg-gray-500">
                <textarea id="replyText-${commentId}" class="w-full p-2 border rounded-md mb-2 bg-gray-500" placeholder="Komentar"></textarea>
                <button onclick="submitReply('${commentId}')" class="px-4 py-2 bg-green-500 text-white rounded-md">Kirim Balasan</button>
            </div>
        `;

            // Append komentar ke HTML
            document.getElementById('comments-section').innerHTML += commentHTML;

            // Ambil balasan untuk komentar ini
            db.collection('comments').doc(commentId).collection('replies').orderBy('timestamp', 'asc').get().then(replySnapshot => {
                replySnapshot.forEach(replyDoc => {
                    const replyData = replyDoc.data();
                    let replyHTML = `
                        <div class="bg-gray-700 p-3 rounded-lg shadow-md mt-2">
                        <h3 class="text-lg font-semibold text-gray-400 mb-2">${replyData.username}</h3>
                        <p class="text-gray-100">${replyData.comment}</p>
                        <small class="text-gray-400">${new Date(replyData.timestamp.seconds * 1000).toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</small>
                        </div>
                    `;
                    document.getElementById(`replies-${commentId}`).innerHTML += replyHTML;
                });
            });
        });
    });
}

// Tampilkan komentar saat halaman dimuat
displayComments();



// Fungsi untuk submit balasan
function submitReply(commentId) {
    const replyName = document.getElementById(`replyName-${commentId}`).value;
    const replyText = document.getElementById(`replyText-${commentId}`).value;

    if (replyName.trim() !== "" && replyText.trim() !== "") {
        db.collection('comments').doc(commentId).collection('replies').add({
            username: replyName,
            comment: replyText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            document.getElementById(`replyName-${commentId}`).value = ''; // Kosongkan input Nama
            document.getElementById(`replyText-${commentId}`).value = ''; // Kosongkan input Balasan
            document.getElementById(`replyForm-${commentId}`).classList.toggle('hidden');
        }).catch(error => {
            console.error("Error adding reply: ", error);
            document.getElementById(`replyForm-${commentId}`).classList.toggle('hidden');
        });
    } else {
        alert("Nama dan Balasan tidak boleh kosong!");
    }
}

// Fungsi untuk menampilkan form balasan
function showReplyForm(commentId) {
    document.getElementById(`replyForm-${commentId}`).classList.toggle('hidden');
}
