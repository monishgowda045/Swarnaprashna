/**
 * Function to simulate adding a product to a cart and showing a notification.
 * @param {string} productName - The name of the product being added.
 */
function addToCart(productName) {
    const notificationArea = document.getElementById('notification-area');
    
    // 1. Create the message text
    const message = `${productName} has been added to your virtual cart! (Functionality is simulated)`;
    
    // 2. Display the notification
    notificationArea.textContent = message;
    notificationArea.classList.add('show');
    
    // 3. Automatically hide the notification after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        notificationArea.classList.remove('show');
    }, 3000);
}