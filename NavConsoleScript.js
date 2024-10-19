setInterval(() => {
    const unblockButtons = document.querySelectorAll('div[data-testid="cellInnerDiv"] button[role="button"][aria-label="محظور"]');
    
    unblockButtons.forEach(button => {
        const userCell = button.closest('div[data-testid="cellInnerDiv"]');
        const userName = userCell.querySelector('div[dir="rtl"] span').innerText;

        button.click();

        console.log(`Unblocked user: ${userName}`);
    });
}, 1000);
