// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        const video = document.getElementById('camera');
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.error("Error accessing the camera: ", err);
    });

document.getElementById('capture-button').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const video = document.getElementById('camera');

    // Capture the image from the video stream
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Placeholder for AI waste identification logic
    // You would typically send imageData to your server or an AI API for processing
    identifyWaste(imageData);
});

function identifyWaste(imageData) {
    // Simulate AI identification process
    setTimeout(() => {
        const identifiedMaterial = "Plastic"; // This should be the result from your AI model
        document.getElementById('result').textContent = `Identified as: ${identifiedMaterial}`;

        // Add reward points for correct identification
        let points = parseInt(document.getElementById('total-points').textContent);
        points += 10; // Assume 10 points for correct recycling
        document.getElementById('total-points').textContent = points;
        document.getElementById('rewards-list').textContent = "Eco-friendly Badge, Discount Coupons";
    }, 1000); // Simulate processing delay
}
