
// =========================================
// 1. БАЗА ДАННЫХ КАТЕГОРИЙ
// =========================================
const categoriesDB = [
    { id: 1, name: "Звёздные войны", icon: "img/categories/starwars.png", count: 5 },
    { id: 2, name: "Городские наборы", icon: "img/categories/city.png", count: 5 },
    { id: 3, name: "Техника", icon: "img/categories/technic.png", count: 5 },
    { id: 4, name: "Гарри Поттер", icon: "img/categories/harrypotter.png", count: 5 },
    { id: 5, name: "Для малышей", icon: "img/categories/duplo.png", count: 5 },
    { id: 6, name: "Для девочек", icon: "img/categories/friends.png", count: 5 },
    { id: 7, name: "Ниндзяго", icon: "img/categories/ninjago.png", count: 5 },
    { id: 8, name: "Авторские", icon: "img/categories/ideas.png", count: 5 },
    { id: 9, name: "Супергерои", icon: "img/categories/marvel.png", count: 5 },
    { id: 10, name: "Архитектура", icon: "img/categories/architecture.png", count: 5 }
];

// =========================================
// 2. БАЗА ДАННЫХ ТОВАРОВ (50 товаров)
// =========================================
const productsDB = [
    { id: 1, name: "LEGO Star Wars: Сокол Тысячелетия", price: 15990, age: "10+", pieces: 1351, category: "Звёздные войны", image: "img/products/starwars_falcon.png" },
    { id: 2, name: "LEGO Star Wars: AT-AT", price: 18990, age: "10+", pieces: 1267, category: "Звёздные войны", image: "img/products/starwars_atat.png" },
    { id: 3, name: "LEGO Star Wars: Истребитель X-Wing", price: 6990, age: "9+", pieces: 478, category: "Звёздные войны", image: "img/products/starwars_xwing.png" },
    { id: 4, name: "LEGO Star Wars: Штурмовик", price: 1990, age: "8+", pieces: 85, category: "Звёздные войны", image: "img/products/starwars_stormtrooper.png" },
    { id: 5, name: "LEGO Star Wars: Мандалорец", price: 2490, age: "10+", pieces: 109, category: "Звёздные войны", image: "img/products/starwars_mandalorian.png" },
    { id: 6, name: "LEGO City: Полицейский участок", price: 4500, age: "6+", pieces: 668, category: "Городские наборы", image: "img/products/city_police.png" },
    { id: 7, name: "LEGO City: Пожарная станция", price: 5200, age: "6+", pieces: 743, category: "Городские наборы", image: "img/products/city_fire.png" },
    { id: 8, name: "LEGO City: Космический корабль", price: 3800, age: "7+", pieces: 420, category: "Городские наборы", image: "img/products/city_space.png" },
    { id: 9, name: "LEGO City: Скорая помощь", price: 1890, age: "5+", pieces: 178, category: "Городские наборы", image: "img/products/city_ambulance.png" },
    { id: 10, name: "LEGO City: Аэропорт", price: 7900, age: "8+", pieces: 926, category: "Городские наборы", image: "img/products/city_airport.png" },
    { id: 11, name: "LEGO Technic: McLaren Senna", price: 12500, age: "12+", pieces: 830, category: "Техника", image: "img/products/technic_mclaren.png" },
    { id: 12, name: "LEGO Technic: Lamborghini", price: 14990, age: "12+", pieces: 912, category: "Техника", image: "img/products/technic_lambo.png" },
    { id: 13, name: "LEGO Technic: Бульдозер", price: 3200, age: "9+", pieces: 385, category: "Техника", image: "img/products/technic_bulldozer.png" },
    { id: 14, name: "LEGO Technic: Мотоцикл", price: 2890, age: "10+", pieces: 245, category: "Техника", image: "img/products/technic_motorcycle.png" },
    { id: 15, name: "LEGO Technic: Вертолёт", price: 4100, age: "11+", pieces: 512, category: "Техника", image: "img/products/technic_helicopter.png" },
    { id: 16, name: "LEGO Harry Potter: Хогвартс", price: 8900, age: "12+", pieces: 850, category: "Гарри Поттер", image: "img/products/hp_hogwarts.png" },
    { id: 17, name: "LEGO Harry Potter: Нора Уизли", price: 4200, age: "10+", pieces: 456, category: "Гарри Поттер", image: "img/products/hp_burrow.png" },
    { id: 18, name: "LEGO Harry Potter: Хижина Хагрида", price: 3100, age: "9+", pieces: 345, category: "Гарри Поттер", image: "img/products/hp_hagrid.png" },
    { id: 19, name: "LEGO Harry Potter: Замок Хогвартс", price: 12900, age: "12+", pieces: 1120, category: "Гарри Поттер", image: "img/products/hp_castle.png" },
    { id: 20, name: "LEGO Harry Potter: Ночь в Хогвартсе", price: 5600, age: "11+", pieces: 623, category: "Гарри Поттер", image: "img/products/hp_night.png" },
    { id: 21, name: "LEGO Duplo: Мой первый поезд", price: 2100, age: "4+", pieces: 23, category: "Для малышей", image: "img/products/duplo_train.png" },
    { id: 22, name: "LEGO Duplo: Ферма", price: 3200, age: "5+", pieces: 45, category: "Для малышей", image: "img/products/duplo_farm.png" },
    { id: 23, name: "LEGO Duplo: Пожарная машина", price: 1890, age: "4+", pieces: 18, category: "Для малышей", image: "img/products/duplo_firetruck.png" },
    { id: 24, name: "LEGO Duplo: Зоопарк", price: 2800, age: "5+", pieces: 38, category: "Для малышей", image: "img/products/duplo_zoo.png" },
    { id: 25, name: "LEGO Duplo: Домик", price: 3500, age: "6+", pieces: 52, category: "Для малышей", image: "img/products/duplo_house.png" },
    { id: 26, name: "LEGO Friends: Дом на пляже", price: 3200, age: "6+", pieces: 282, category: "Для девочек", image: "img/products/friends_beach.png" },
    { id: 27, name: "LEGO Friends: Кафе", price: 2800, age: "6+", pieces: 234, category: "Для девочек", image: "img/products/friends_cafe.png" },
    { id: 28, name: "LEGO Friends: Школа", price: 4100, age: "7+", pieces: 398, category: "Для девочек", image: "img/products/friends_school.png" },
    { id: 29, name: "LEGO Friends: Ветеринарная клиника", price: 3600, age: "6+", pieces: 312, category: "Для девочек", image: "img/products/friends_vet.png" },
    { id: 30, name: "LEGO Friends: Конюшня", price: 2900, age: "7+", pieces: 245, category: "Для девочек", image: "img/products/friends_stable.png" },
    { id: 31, name: "LEGO Ninjago: Дракон", price: 5600, age: "9+", pieces: 552, category: "Ниндзяго", image: "img/products/ninjago_dragon.png" },
    { id: 32, name: "LEGO Ninjago: Храм света", price: 7200, age: "10+", pieces: 689, category: "Ниндзяго", image: "img/products/ninjago_temple.png" },
    { id: 33, name: "LEGO Ninjago: Ллойд", price: 2100, age: "8+", pieces: 178, category: "Ниндзяго", image: "img/products/ninjago_lloyd.png" },
    { id: 34, name: "LEGO Ninjago: Кай", price: 2100, age: "8+", pieces: 165, category: "Ниндзяго", image: "img/products/ninjago_kai.png" },
    { id: 35, name: "LEGO Ninjago: Зейн", price: 2100, age: "8+", pieces: 172, category: "Ниндзяго", image: "img/products/ninjago_zane.png" },
    { id: 36, name: "LEGO Ideas: Пираты", price: 7800, age: "12+", pieces: 734, category: "Авторские", image: "img/products/ideas_pirates.png" },
    { id: 37, name: "LEGO Ideas: Домик на дереве", price: 6500, age: "12+", pieces: 623, category: "Авторские", image: "img/products/ideas_treehouse.png" },
    { id: 38, name: "LEGO Ideas: Ракета", price: 8900, age: "14+", pieces: 856, category: "Авторские", image: "img/products/ideas_rocket.png" },
    { id: 39, name: "LEGO Ideas: Пианино", price: 9200, age: "14+", pieces: 912, category: "Авторские", image: "img/products/ideas_piano.png" },
    { id: 40, name: "LEGO Ideas: Глобус", price: 5400, age: "12+", pieces: 489, category: "Авторские", image: "img/products/ideas_globe.png" },
    { id: 41, name: "LEGO Marvel: Человек-паук", price: 4100, age: "8+", pieces: 345, category: "Супергерои", image: "img/products/marvel_spiderman.png" },
    { id: 42, name: "LEGO Marvel: Железный человек", price: 3800, age: "8+", pieces: 312, category: "Супергерои", image: "img/products/marvel_ironman.png" },
    { id: 43, name: "LEGO Marvel: Мстители", price: 6200, age: "9+", pieces: 523, category: "Супергерои", image: "img/products/marvel_avengers.png" },
    { id: 44, name: "LEGO Marvel: Бэтмен", price: 4500, age: "9+", pieces: 378, category: "Супергерои", image: "img/products/marvel_batman.png" },
    { id: 45, name: "LEGO Marvel: Халк", price: 3900, age: "8+", pieces: 298, category: "Супергерои", image: "img/products/marvel_hulk.png" },
    { id: 46, name: "LEGO Architecture: Эйфелева башня", price: 6200, age: "12+", pieces: 648, category: "Архитектура", image: "img/products/architecture_eiffel.png" },
    { id: 47, name: "LEGO Architecture: Нью-Йорк", price: 5800, age: "12+", pieces: 598, category: "Архитектура", image: "img/products/architecture_ny.png" },
    { id: 48, name: "LEGO Architecture: Лондон", price: 5400, age: "12+", pieces: 567, category: "Архитектура", image: "img/products/architecture_london.png" },
    { id: 49, name: "LEGO Architecture: Париж", price: 5600, age: "12+", pieces: 589, category: "Архитектура", image: "img/products/architecture_paris.png" },
    { id: 50, name: "LEGO Architecture: Токио", price: 5900, age: "12+", pieces: 612, category: "Архитектура", image: "img/products/architecture_tokyo.png" }
];

// =========================================
// 3. ТОВАРЫ ПО КАТЕГОРИЯМ
// =========================================
const productsByCategory = {};
productsDB.forEach(product => {
    if (!productsByCategory[product.category]) {
        productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
});

// =========================================
// 4. КОРЗИНА И ИЗБРАННОЕ
// =========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateCounters() {
    const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCounters = document.querySelectorAll('.cart-count');
    cartCounters.forEach(counter => {
        if (counter) {
            counter.textContent = cartTotal;
            counter.style.display = cartTotal > 0 ? 'inline' : 'none';
        }
    });
    
    const favCounters = document.querySelectorAll('.fav-count');
    favCounters.forEach(counter => {
        if (counter) {
            counter.textContent = favorites.length;
            counter.style.display = favorites.length > 0 ? 'inline' : 'none';
        }
    });
}

// =========================================
// 5. ОТОБРАЖЕНИЕ КАТЕГОРИЙ
// =========================================
function renderCategories(categories) {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    container.innerHTML = '';

    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('category-card');
        
        categoryCard.innerHTML = `
            <div class="category-icon">
                <img src="${category.icon}" alt="${category.name}" class="category-image">
            </div>
            <h3>${category.name}</h3>
            <p style="font-size: 12px; color: #999;">${category.count} товаров</p>
        `;

        categoryCard.onclick = () => {
            filterByCategory(category.name);
        };
        
        container.appendChild(categoryCard);
    });
}

// =========================================
// 6. ОТОБРАЖЕНИЕ ТОВАРОВ
// =========================================
function renderProducts(products) {
    const container = document.getElementById('productsContainer') || document.getElementById('catalogProductsGrid');
    if (!container) return;
    
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">Товары не найдены</p>';
        return;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// =========================================
// 7. СОЗДАНИЕ КАРТОЧКИ ТОВАРА
// =========================================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductPage(product.id);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='img/placeholder.png'">
        </div>
        <div class="product-age">${product.age}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">${product.price.toLocaleString()} ₽</div>
        <div class="product-details">Деталей: ${product.pieces}</div>
        <div class="product-buttons">
            <button class="btn-buy" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
            <button class="btn-fav" onclick="event.stopPropagation(); addToFavorites(${product.id})">В избранное</button>
        </div>
    `;
    
    return card;
}

// =========================================
// 8. ФИЛЬТРАЦИЯ ПО КАТЕГОРИИ
// =========================================
function filterByCategory(categoryName) {
    window.location.href = `category.html?name=${encodeURIComponent(categoryName)}`;
}

// =========================================
// 9. ПОИСК ТОВАРОВ
// =========================================
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
}

// =========================================
// 10. ДОБАВЛЕНИЕ В КОРЗИНУ
// =========================================
function addToCart(productId) {
    const product = productsDB.find(p => p.id === productId);
    if (!product) {
        alert('Товар не найден!');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            age: product.age,
            pieces: product.pieces,
            quantity: 1
        });
    }
    
    saveCart();
    updateCounters();
    alert(`Товар "${product.name}" добавлен в корзину!`);
}

// =========================================
// 11. ДОБАВЛЕНИЕ В ИЗБРАННОЕ
// =========================================
function addToFavorites(productId) {
    const product = productsDB.find(p => p.id === productId);
    if (!product) {
        alert('Товар не найден!');
        return;
    }
    
    const alreadyInFavorites = favorites.find(item => item.id === productId);
    
    if (!alreadyInFavorites) {
        favorites.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            age: product.age,
            pieces: product.pieces
        });
        
        saveFavorites();
        updateCounters();
        alert(`Товар "${product.name}" добавлен в избранное!`);
    } else {
        alert('Этот товар уже в избранном!');
    }
}

// =========================================
// 12. УДАЛЕНИЕ ИЗ КОРЗИНЫ
// =========================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCounters();
    renderCartPage();
}

// =========================================
// 13. УДАЛЕНИЕ ИЗ ИЗБРАННОГО
// =========================================
function removeFromFavorites(productId) {
    favorites = favorites.filter(item => item.id !== productId);
    saveFavorites();
    updateCounters();
    renderFavoritesPage();
}

// =========================================
// 14. ИЗМЕНЕНИЕ КОЛИЧЕСТВА В КОРЗИНЕ
// =========================================
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCartPage();
    }
}

// =========================================
// 15. ОЧИСТКА КОРЗИНЫ
// =========================================
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Очистить корзину?')) {
        cart = [];
        saveCart();
        updateCounters();
        renderCartPage();
    }
}

// =========================================
// 16. ОФОРМЛЕНИЕ ЗАКАЗА
// =========================================
function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Заказ оформлен! Общая сумма: ${total.toLocaleString()} ₽\n\nСпасибо за покупку!`);
    
    cart = [];
    saveCart();
    updateCounters();
    renderCartPage();
}

// =========================================
// 17. ДОБАВИТЬ В КОРЗИНУ ИЗ ИЗБРАННОГО
// =========================================
function addToCartFromFavorites(productId) {
    addToCart(productId);
}

// =========================================
// 18. МЕНЮ
// =========================================
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdownMenu');
    const toggle = document.querySelector('.menu-toggle');
    
    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// =========================================
// 19. МОДАЛЬНОЕ ОКНО ОБРАТНОЙ СВЯЗИ
// =========================================
function openFeedbackModal(e) {
    if(e) e.preventDefault();
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('feedbackModal');
    if (event.target == modal) {
        closeFeedbackModal();
    }
}

function submitFeedback(event) {
    event.preventDefault();
    alert('Спасибо! Ваше сообщение успешно отправлено.');
    closeFeedbackModal();
    event.target.reset();
}

// =========================================
// 20. СТРАНИЦА КАТЕГОРИИ
// =========================================
function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('name');
    
    if (!categoryName) {
        window.location.href = 'index.html';
        return;
    }
    
    const decodedName = decodeURIComponent(categoryName);
    
    const titleEl = document.getElementById('categoryTitle');
    const breadcrumbEl = document.getElementById('breadcrumbCategory');
    
    if (titleEl) titleEl.textContent = decodedName;
    if (breadcrumbEl) breadcrumbEl.textContent = decodedName;
    
    renderCategoryProducts(decodedName);
}

function renderCategoryProducts(categoryName) {
    const container = document.getElementById('categoryProductsGrid');
    if (!container) return;
    
    const products = productsByCategory[categoryName] || [];
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; font-size: 18px; color: #666; grid-column: 1/-1;">Товары временно отсутствуют</p>';
        return;
    }
    
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// =========================================
// 21. СТРАНИЦА КАТАЛОГА
// =========================================
function loadCatalogPage() {
    const container = document.getElementById('catalogProductsGrid');
    if (!container) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    let productsToShow = productsDB;
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        productsToShow = productsDB.filter(p => p.name.toLowerCase().includes(query));
    }
    
    container.innerHTML = '';
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Товары не найдены</p>';
        return;
    }
    
    productsToShow.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function filterCatalog() {
    const age = document.getElementById('ageFilter')?.value || 'all';
    const price = document.getElementById('priceFilter')?.value || 'all';
    
    let filtered = [...productsDB];
    
    if (age !== 'all') {
        filtered = filtered.filter(p => p.age === age);
    }
    
    if (price === 'low') {
        filtered = filtered.filter(p => p.price < 3000);
    } else if (price === 'mid') {
        filtered = filtered.filter(p => p.price >= 3000 && p.price <= 7000);
    } else if (price === 'high') {
        filtered = filtered.filter(p => p.price > 7000);
    }
    
    const container = document.getElementById('catalogProductsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Товары не найдены</p>';
        return;
    }
    
    filtered.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// =========================================
// 22. СТРАНИЦА ТОВАРА
// =========================================
function loadProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = productsDB.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    document.title = `LEGO + | ${product.name}`;
    
    const elements = {
        'productName': product.name,
        'productPrice': `${product.price.toLocaleString()} ₽`,
        'productAge': product.age,
        'productPieces': product.pieces,
        'productArticle': `LEGO-${product.id.toString().padStart(5, '0')}`,
        'productCategory': product.category,
        'productDescription': `Отличный набор LEGO из серии "${product.category}". Содержит ${product.pieces} деталей. Рекомендуемый возраст: ${product.age}.`
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    loadRelatedProducts(product.category, productId);
}

function loadRelatedProducts(categoryName, currentProductId) {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;
    
    const products = productsByCategory[categoryName] || [];
    const related = products.filter(p => p.id !== currentProductId).slice(0, 4);
    
    container.innerHTML = '';
    
    related.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function openProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// =========================================
// 23. ОТРИСОВКА СТРАНИЦЫ КОРЗИНЫ (БЕЗ ссылки "Перейти в каталог")
// =========================================
function renderCartPage() {
    const container = document.getElementById('cartContent');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛒</div>
                <h2>Корзина пуста</h2>
                <p>Добавьте товары из каталога</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="cart-items-list">';
    
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='img/placeholder.png'">
                </div>
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <div class="cart-item-details">Возраст: ${item.age} | Деталей: ${item.pieces}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-selector">
                        <button onclick="changeQuantity(${item.id}, -1)">-</button>
                        <input type="number" value="${item.quantity}" min="1" readonly>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Удалить</button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    html += `
        <div class="cart-summary">
            <div class="cart-total">
                <span>Итого:</span>
                <span>${total.toLocaleString()} ₽</span>
            </div>
            <div class="cart-buttons">
                <button class="btn-clear-cart" onclick="clearCart()">Очистить корзину</button>
                <button class="btn-checkout" onclick="checkout()">Оформить заказ</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// =========================================
// 24. ОТРИСОВКА СТРАНИЦЫ ИЗБРАННОГО (БЕЗ ссылки "Перейти в каталог")
// =========================================
function renderFavoritesPage() {
    const container = document.getElementById('favoritesContent');
    if (!container) return;
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-favorites">
                <div class="empty-icon">♡</div>
                <h2>Список избранного пуст</h2>
                <p>Добавьте понравившиеся товары</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="favorites-items-list">';
    
    favorites.forEach(item => {
        html += `
            <div class="favorites-item">
                <div class="favorites-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='img/placeholder.png'">
                </div>
                <div class="favorites-item-info">
                    <h3>${item.name}</h3>
                    <div class="favorites-item-details">Возраст: ${item.age} | Деталей: ${item.pieces}</div>
                    <div class="favorites-item-price">${item.price.toLocaleString()} ₽</div>
                    <button class="btn-add-to-cart" onclick="addToCartFromFavorites(${item.id})">В корзину</button>
                </div>
                <button class="remove-btn" onclick="removeFromFavorites(${item.id})">Удалить</button>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// =========================================
// 25. ЗАГРУЗКА СТРАНИЦЫ (ИСПРАВЛЕНО!)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    updateCounters();
    
    const path = window.location.pathname;
    
    if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
        renderCategories(categoriesDB);
        renderProducts(productsDB.slice(0, 10));
    } else if (path.endsWith('category.html')) {
        loadCategoryPage();
    } else if (path.endsWith('catalog.html')) {
        loadCatalogPage();
    } else if (path.endsWith('product.html')) {
        loadProductPage();
    } else if (path.endsWith('cart.html')) {
        renderCartPage();
    } else if (path.endsWith('favorites.html')) {
        renderFavoritesPage();
    }
});