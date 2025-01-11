$(document).ready(function () {
    // Navbar sticky saat scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Tampilkan atau sembunyikan tombol scroll-up
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Klik tombol scroll-up untuk kembali ke atas
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Durasi animasi lebih halus
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll saat klik menu navbar
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault(); // Mencegah reload halaman
        var target = $(this).attr('href'); // Ambil ID target dari href
        var offset = $(target).offset().top - $('.navbar').outerHeight(); // Hitung posisi dengan offset navbar
        $('html, body').animate({
            scrollTop: offset
        }, 800); // Durasi animasi 800ms
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animasi teks menggunakan Typed.js
    var typed1 = new Typed(".typing", {
        strings: [
            "Mahasiswa Unibi",
            "Pengembang Web",
            "Pemrogram Kreatif"
        ],
        typeSpeed: 100,                  // Kecepatan mengetik
        backSpeed: 70,                   // Kecepatan menghapus
        startDelay: 300,                 // Penundaan awal
        backDelay: 1500,                 // Penundaan sebelum menghapus
        showCursor: true,                // Menampilkan kursor
        cursorChar: "_",                 // Kursor berbentuk garis bawah
        loop: true                       // Animasi berulang
    });

    var typed2 = new Typed(".typing-2", {
        strings: [
            "Saya M Tonny Heru Susanto Adalah Mahasiswa Informatika",
            "Saya Bersemangat dalam Pemrograman",
            "Dan Ingin Berkontribusi pada Teknologi Masa Depan"
        ],
        typeSpeed: 90,                   // Kecepatan mengetik
        backSpeed: 60,                   // Kecepatan menghapus
        startDelay: 500,                 // Penundaan awal
        backDelay: 2000,                 // Penundaan sebelum menghapus
        showCursor: true,                // Menampilkan kursor berkedip
        cursorChar: "|",                 // Kursor berbentuk garis vertikal
        loop: true                       // Animasi berulang
    });

    // Owl Carousel untuk carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,           // Waktu autoplay diperpanjang
        autoplayHoverPause: true,        // Berhenti saat mouse hover
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Fungsi untuk mengirim email menggunakan EmailJS
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_f09qivb";
    const templateID = "template_d7pw5ao";

    // Inisialisasi EmailJS (pastikan mengganti USER_ID Anda)
    emailjs.init("YOUR_USER_ID");

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Kosongkan input setelah email berhasil dikirim
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Pesan berhasil terkirim:", res);
            alert("Pesan Telah Terkirim!");
        })
        .catch((err) => {
            console.error("Terjadi kesalahan saat mengirim pesan:", err);
            alert("Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.");
        });
}
