

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
  });

  // Select all project cards
const projectCards = document.querySelectorAll('.project');

// Add click event listener to each project card
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the URL from the data-href attribute and navigate to it
        const url = card.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});


  document.getElementById('viewMoreBtn').addEventListener('click', function() {
    const moreProjects = document.getElementById('more-projects');
    if (moreProjects.style.display === 'none') {
        moreProjects.style.display = 'flex'; 
        this.style.display = 'none';
    }
});
document.getElementById("contactBtn").addEventListener("click", function() {
    var form = document.getElementById("contactForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });

    document.getElementById('contactBtn').addEventListener('click', function() {
        document.getElementById('contactForm').style.display = 'block';
    });




