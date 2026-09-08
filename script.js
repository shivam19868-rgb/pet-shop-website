// Pet Shop Database
const petsDatabase = [
    {
        id: 1,
        name: 'Max',
        breed: 'Golden Retriever',
        age: 2,
        weight: 32,
        color: 'Golden',
        gender: 'Male',
        personality: 'Friendly, Playful, Loyal',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1633722715463-d30628519e20?w=500&h=500&fit=crop',
        description: 'Max is a beautiful Golden Retriever with a gentle temperament. He loves playing fetch and swimming. Perfect for families with children.'
    },
    {
        id: 2,
        name: 'Luna',
        breed: 'Labrador',
        age: 1.5,
        weight: 30,
        color: 'Black',
        gender: 'Female',
        personality: 'Energetic, Affectionate, Intelligent',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&h=500&fit=crop',
        description: 'Luna is a vibrant Labrador who loves outdoor adventures. She is highly intelligent and easy to train. Great companion for active families.'
    },
    {
        id: 3,
        name: 'Charlie',
        breed: 'German Shepherd',
        age: 3,
        weight: 35,
        color: 'Brown & Black',
        gender: 'Male',
        personality: 'Protective, Alert, Loyal',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1568393691622-03fdc78d62c4?w=500&h=500&fit=crop',
        description: 'Charlie is a well-trained German Shepherd with excellent temperament. He is loyal, protective, and makes an ideal family pet and guard dog.'
    },
    {
        id: 4,
        name: 'Bella',
        breed: 'Bulldog',
        age: 2.5,
        weight: 28,
        color: 'Fawn',
        gender: 'Female',
        personality: 'Calm, Gentle, Stubborn',
        health: 'Good',
        vaccinated: 'Yes',
        price: 1300,
        image: 'https://images.unsplash.com/photo-1583511050667-c2b2d4304bcd?w=500&h=500&fit=crop',
        description: 'Bella is an adorable Bulldog with a sweet nature. She enjoys short walks and relaxing at home. Perfect for apartment living.'
    },
    {
        id: 5,
        name: 'Duke',
        breed: 'Poodle',
        age: 1.5,
        weight: 18,
        color: 'White',
        gender: 'Male',
        personality: 'Intelligent, Active, Affectionate',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 950,
        image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=500&h=500&fit=crop',
        description: 'Duke is a smart and elegant Poodle with curly white coat. He loves games and training. Hypoallergenic breed, great for allergy sufferers.'
    },
    {
        id: 6,
        name: 'Buddy',
        breed: 'Beagle',
        age: 2,
        weight: 14,
        color: 'Brown & White',
        gender: 'Male',
        personality: 'Curious, Friendly, Playful',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 850,
        image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop',
        description: 'Buddy is a cheerful Beagle with endless energy. He loves sniffing and exploring. Makes a wonderful companion for active individuals.'
    },
    {
        id: 7,
        name: 'Whiskers',
        breed: 'Persian Cat',
        age: 1.5,
        weight: 4.5,
        color: 'White',
        gender: 'Female',
        personality: 'Calm, Gentle, Independent',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 600,
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop',
        description: 'Whiskers is a beautiful Persian cat with a luxurious coat. She is calm and enjoys lounging in comfortable spots. Perfect for quiet homes.'
    },
    {
        id: 8,
        name: 'Mittens',
        breed: 'Siamese Cat',
        age: 2,
        weight: 3.5,
        color: 'Cream & Brown',
        gender: 'Female',
        personality: 'Vocal, Playful, Intelligent',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 700,
        image: 'https://images.unsplash.com/photo-1513360371669-4a028e1e38a0?w=500&h=500&fit=crop',
        description: 'Mittens is a vocal and playful Siamese cat. She loves interactive games and human attention. Makes an entertaining household pet.'
    },
    {
        id: 9,
        name: 'Hoppy',
        breed: 'Rabbit',
        age: 1,
        weight: 2.5,
        color: 'Brown & White',
        gender: 'Male',
        personality: 'Gentle, Curious, Social',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 200,
        image: 'https://images.unsplash.com/photo-1585110396000-c9fbe2915b77?w=500&h=500&fit=crop',
        description: 'Hoppy is an adorable rabbit with soft fur. He enjoys playing and exploring. Great pet for children and families.'
    },
    {
        id: 10,
        name: 'Nibbles',
        breed: 'Hamster',
        age: 0.5,
        weight: 0.15,
        color: 'Golden',
        gender: 'Male',
        personality: 'Active, Cute, Nocturnal',
        health: 'Good',
        vaccinated: 'Yes',
        price: 50,
        image: 'https://images.unsplash.com/photo-1585110396000-c9fbe2915b77?w=500&h=500&fit=crop',
        description: 'Nibbles is a cute golden hamster. He is active at night and loves running in his wheel. Perfect first pet for children.'
    },
    {
        id: 11,
        name: 'Daisy',
        breed: 'Golden Retriever',
        age: 1.5,
        weight: 30,
        color: 'Cream',
        gender: 'Female',
        personality: 'Sweet, Gentle, Playful',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1633722715463-d30628519e20?w=500&h=500&fit=crop',
        description: 'Daisy is a sweet golden retriever with a gentle disposition. She loves water and fetch games. Excellent with families.'
    },
    {
        id: 12,
        name: 'Scout',
        breed: 'Labrador',
        age: 2.5,
        weight: 32,
        color: 'Yellow',
        gender: 'Male',
        personality: 'Active, Loyal, Friendly',
        health: 'Excellent',
        vaccinated: 'Yes',
        price: 1150,
        image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&h=500&fit=crop',
        description: 'Scout is an active and loyal Labrador. He enjoys outdoor activities and is great with children. Perfect companion dog.'
    }
];

// Shopping Cart
let cart = [];
let currentPet = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(petsDatabase);
    setupEventListeners();
    loadCartFromLocalStorage();
});

// Display products on the page
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No pets found. Try a different search!</p>';
        return;
    }

    products.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x300?text=${encodeURIComponent(pet.name)}'">
            <div class="product-info">
                <div class="product-name">${pet.name}</div>
                <div class="product-breed">${pet.breed}</div>
                <div class="product-specs">
                    <div><strong>Age:</strong> ${pet.age} years</div>
                    <div><strong>Weight:</strong> ${pet.weight} kg</div>
                    <div><strong>Color:</strong> ${pet.color}</div>
                </div>
                <div class="product-price">$${pet.price}</div>
                <button class="btn btn-primary" onclick="openPetDetail(${pet.id})">View Details</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterProducts);

    // Filter functionality
    const filterBreed = document.getElementById('filterBreed');
    filterBreed.addEventListener('change', filterProducts);

    // Modal close button
    const modal = document.getElementById('petModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closePetDetail);

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closePetDetail();
        }
    });

    // Cart link
    const cartLink = document.querySelector('.cart-link');
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
}

// Filter products based on search and breed
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedBreed = document.getElementById('filterBreed').value;

    const filtered = petsDatabase.filter(pet => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm) || 
                            pet.breed.toLowerCase().includes(searchTerm);
        const matchesBreed = selectedBreed === '' || pet.breed === selectedBreed;
        return matchesSearch && matchesBreed;
    });

    displayProducts(filtered);
}

// Open pet detail modal
function openPetDetail(petId) {
    currentPet = petsDatabase.find(pet => pet.id === petId);
    
    if (currentPet) {
        document.getElementById('detailImage').src = currentPet.image;
        document.getElementById('detailImage').onerror = function() {
            this.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(currentPet.name);
        };
        document.getElementById('detailName').textContent = currentPet.name;
        document.getElementById('detailBreed').textContent = currentPet.breed;
        document.getElementById('detailAge').textContent = currentPet.age;
        document.getElementById('detailWeight').textContent = currentPet.weight;
        document.getElementById('detailColor').textContent = currentPet.color;
        document.getElementById('detailGender').textContent = currentPet.gender;
        document.getElementById('detailPersonality').textContent = currentPet.personality;
        document.getElementById('detailHealth').textContent = currentPet.health;
        document.getElementById('detailVaccinated').textContent = currentPet.vaccinated;
        document.getElementById('detailDescription').textContent = currentPet.description;
        document.getElementById('detailPrice').textContent = currentPet.price;

        const modal = document.getElementById('petModal');
        modal.classList.add('show');
    }
}

// Close pet detail modal
function closePetDetail() {
    const modal = document.getElementById('petModal');
    modal.classList.remove('show');
    currentPet = null;
}

// Add pet to cart
function addToCart() {
    if (currentPet) {
        const existingItem = cart.find(item => item.id === currentPet.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: currentPet.id,
                name: currentPet.name,
                breed: currentPet.breed,
                price: currentPet.price,
                image: currentPet.image,
                quantity: 1
            });
        }
        
        saveCartToLocalStorage();
        updateCartCount();
        
        // Show confirmation
        const buyBtn = document.getElementById('buyBtn');
        const originalText = buyBtn.textContent;
        buyBtn.textContent = '✓ Added to Cart';
        buyBtn.style.backgroundColor = '#48bb78';
        
        setTimeout(() => {
            buyBtn.textContent = originalText;
            buyBtn.style.backgroundColor = '';
        }, 2000);
    }
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Open shopping cart
function openCart() {
    const cartModal = document.getElementById('cartModal');
    displayCartItems();
    calculateTotal();
    cartModal.classList.add('show');
}

// Close shopping cart
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('show');
}

// Display cart items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">Your cart is empty!</p>';
        return;
    }
    
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name} (${item.breed})</div>
                <div class="cart-item-price">$${item.price} x ${item.quantity} = $${item.price * item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

// Remove item from cart
function removeFromCart(petId) {
    cart = cart.filter(item => item.id !== petId);
    saveCartToLocalStorage();
    updateCartCount();
    displayCartItems();
    calculateTotal();
}

// Calculate total price
function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.name} (${item.quantity}x)`).join(', ');
    
    alert(`Thank you for your purchase!\n\nItems: ${itemsList}\nTotal: $${total.toFixed(2)}\n\nYour order has been confirmed. You will receive a confirmation email shortly.`);
    
    // Clear cart
    cart = [];
    saveCartToLocalStorage();
    updateCartCount();
    closeCart();
    displayProducts(petsDatabase);
}

// Local Storage functions
function saveCartToLocalStorage() {
    localStorage.setItem('petShopCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('petShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}