// Sample data for blood inventory
const bloodInventory = [
    { type: 'O+', unitsAvailable: 50 },
    { type: 'A+', unitsAvailable: 30 },
    { type: 'B-', unitsAvailable: 20 },
    { type: 'AB+', unitsAvailable: 15 },
];

// Function to display blood inventory
function displayInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = ''; // Clear previous content

    bloodInventory.forEach(bloodType => {
        const listItem = document.createElement('div');
        listItem.classList.add('inventory-item');
        listItem.innerHTML = `
            <h3>Blood Type: ${bloodType.type}</h3>
            <p>Units Available: ${bloodType.unitsAvailable}</p>
        `;
        inventoryList.appendChild(listItem);
    });
}

// Initial display of inventory
displayInventory();
