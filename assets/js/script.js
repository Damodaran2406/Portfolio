// ---------- EmailJS Initialization ----------
emailjs.init('8ag-mo2H3BHnmIUMF'); // <-- replace with your PUBLIC_KEY

// ---------- Navbar toggle ----------
$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

// ---------- Scroll behavior ----------
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

    $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if (top > offset && top < offset + height) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    });
});

// ---------- Typed.js for home section ----------
var typed = new Typed(".typing-text", {
    strings: ['Full-Stack Developer', 'Freelancer', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// ---------- Contact form submission ----------
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    emailjs.sendForm('service_6rdc6p9', 'template_dvtlq6c', this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            title: 'Success!',
            text: 'Email sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          event.target.reset(); // Clear the form after sending
      }, function(error) {
          console.log('FAILED...', error);
          Swal.fire({
            title: 'Failed!',
            text: 'Email sending failed. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
      });
});

// ---------- Coming Soon buttons ----------
['code-btn1', 'demo-btn1', 'code-btn', 'demo-btn'].forEach(function(id) {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault(); 
        Swal.fire({
          title: 'Coming Soon!',
          text: 'The code/demo will be updated soon.',
          icon: 'info',
          confirmButtonText: 'OK'
        });
    });
});
