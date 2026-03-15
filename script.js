// Tourism Places Data
const tourismPlaces = [
    // Tamil Nadu
    {
        id: 1,
        name: "Ooty",
        state: "tamilnadu",
        location: "Nilgiri Hills, Tamil Nadu",
        description: "Queen of Hill Stations, famous for tea gardens, botanical gardens, and scenic beauty.",
        price: "₹2,500",
        image: "https://i.cdn.newsbytesapp.com/images/l86420220107105737.jpeg",
        rating: 4.8
    },
    {
        id: 2,
        name: "Kodaikanal",
        state: "tamilnadu",
        location: "Dindigul District, Tamil Nadu",
        description: "Princess of Hill Stations, known for its misty mountains, lakes, and waterfalls.",
        price: "₹2,200",
        image: "https://yatranature.in/wp-content/uploads/2024/06/kodaikanal-1.jpg",
        rating: 4.7
    },
    {
        id: 3,
        name: "Mahabalipuram",
        state: "tamilnadu",
        location: "Kanchipuram District, Tamil Nadu",
        description: "UNESCO World Heritage site with ancient rock-cut temples and beautiful beaches.",
        price: "₹1,800",
        image: "https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/mahabalipuram-1655198774_2a9296fc3ccd093bd86f.webp",
        rating: 4.9
    },
    {
        id: 4,
        name: "Madurai",
        state: "tamilnadu",
        location: "Madurai, Tamil Nadu",
        description: "Temple city famous for Meenakshi Amman Temple, one of India's most magnificent temples.",
        price: "₹1,500",
        image: "https://lh5.googleusercontent.com/Ev_NuObJwdnAHczcosV6lYG2VuzlTqMQiLN-LNcGpI2xpjKgRTHUg6HQbny42yjyMRQJopQWfQ9KCXa-IlXT7cn6_iyjupr9HqdT-ReQ7Srf4VtD5CB34Gq7ongizyhBlY34OKwJ",
        rating: 4.8
    },
    {
        id: 5,
        name: "Rameswaram",
        state: "tamilnadu",
        location: "Ramanathapuram District, Tamil Nadu",
        description: "Sacred island town with the famous Ramanathaswamy Temple and pristine beaches.",
        price: "₹1,600",
        image: "https://www.astroved.com/astropedia/assets/images/temples/rameshwaram-ramantha.jpg",
        rating: 4.6
    },
    {
        id: 6,
        name: "Kanyakumari",
        state: "tamilnadu",
        location: "Kanyakumari, Tamil Nadu",
        description: "Land's End of India, where three oceans meet. Famous for sunrise and sunset views.",
        price: "₹1,700",
        image: "http://images.unsplash.com/photo-1610902552120-c577dbde88a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8a2FueWFrdW1hcml8fDB8fHx8MTYyNzc1NDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
        rating: 4.7
    },
    {
        id: 7,
        name: "Thanjavur",
        state: "tamilnadu",
        location: "Thanjavur, Tamil Nadu",
        description: "Home to the Great Living Chola Temples, a UNESCO World Heritage site.",
        price: "₹1,400",
        image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thanjavur-1655294212_8d67c2fdaa46899ddda7.webp",
        rating: 4.6
    },
    {
        id: 8,
        name: "Pondicherry",
        state: "tamilnadu",
        location: "Puducherry",
        description: "French colonial town with beautiful beaches, French architecture, and Auroville.",
        price: "₹2,000",
        image: "https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Pondicherry-India-1244x700.jpg",
        rating: 4.7
    },
    {
        id: 9,
        name: "Kanchipuram",
        state: "tamilnadu",
        location: "Kanchipuram, Tamil Nadu",
        description: "Temple city known for its ancient temples and famous Kanchipuram silk sarees.",
        price: "₹1,500",
        image: "https://www.holidify.com/images/cmsuploads/compressed/A-beautiful-image-of-Kamakshi-Amman-Temple-pond-with-towers_20171219212102.jpg",
        rating: 4.5
    },
    {
        id: 10,
        name: "Coimbatore",
        state: "tamilnadu",
        location: "Coimbatore, Tamil Nadu",
        description: "Manchester of South India, gateway to hill stations and industrial hub.",
        price: "₹1,300",
        image: "https://1.bp.blogspot.com/-gV_RlyvOpKY/YAcq4VA-YmI/AAAAAAAAAME/fj1Pe3566RoqTsNAmzrlV7d5NOwmFjhywCLcBGAsYHQ/s1280/cbe.jpg",
        rating: 4.4
    },
    {
        id: 11,
        name: "Yercaud",
        state: "tamilnadu",
        location: "Salem District, Tamil Nadu",
        description: "Hill station known as 'Jewel of the South' with coffee plantations and orchards.",
        price: "₹2,000",
        image: "http://travpedia.net/wp-content/uploads/2025/02/Yercaud-1024x576.webp",
        rating: 4.5
    },
    {
        id: 12,
        name: "Kumbakonam",
        state: "tamilnadu",
        location: "Thanjavur District, Tamil Nadu",
        description: "Temple town famous for its numerous ancient temples and religious significance.",
        price: "₹1,400",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.4
    },
    
    // Kerala
    {
        id: 13,
        name: "Munnar",
        state: "kerala",
        location: "Idukki District, Kerala",
        description: "Tea gardens paradise with misty mountains, waterfalls, and wildlife sanctuaries.",
        price: "₹2,400",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.9
    },
    {
        id: 14,
        name: "Alleppey",
        state: "kerala",
        location: "Alappuzha, Kerala",
        description: "Famous for backwaters, houseboats, and the annual Nehru Trophy Boat Race.",
        price: "₹2,200",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.8
    },
    {
        id: 15,
        name: "Kochi",
        state: "kerala",
        location: "Ernakulam, Kerala",
        description: "Queen of Arabian Sea with colonial architecture, Chinese fishing nets, and spice markets.",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 16,
        name: "Wayanad",
        state: "kerala",
        location: "Wayanad District, Kerala",
        description: "Lush green forests, wildlife sanctuaries, waterfalls, and ancient caves.",
        price: "₹2,300",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.8
    },
    {
        id: 17,
        name: "Thekkady",
        state: "kerala",
        location: "Idukki District, Kerala",
        description: "Home to Periyar Wildlife Sanctuary, spice plantations, and elephant rides.",
        price: "₹2,100",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 18,
        name: "Kovalam",
        state: "kerala",
        location: "Thiruvananthapuram, Kerala",
        description: "Beautiful beach destination with lighthouse, Ayurvedic resorts, and water sports.",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.6
    },
    {
        id: 19,
        name: "Varkala",
        state: "kerala",
        location: "Thiruvananthapuram, Kerala",
        description: "Cliff beach with natural springs, ancient Janardhana Swamy Temple, and Ayurvedic centers.",
        price: "₹1,900",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 20,
        name: "Kumarakom",
        state: "kerala",
        location: "Kottayam District, Kerala",
        description: "Backwater destination with bird sanctuary, houseboats, and traditional Kerala cuisine.",
        price: "₹2,200",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.8
    },
    {
        id: 21,
        name: "Thiruvananthapuram",
        state: "kerala",
        location: "Thiruvananthapuram, Kerala",
        description: "Capital city with Padmanabhaswamy Temple, museums, and beautiful beaches.",
        price: "₹1,800",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.5
    },
    {
        id: 22,
        name: "Idukki",
        state: "kerala",
        location: "Idukki District, Kerala",
        description: "Hill station with Idukki Dam, wildlife sanctuaries, and spice plantations.",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.6
    },
    
    // Karnataka
    {
        id: 23,
        name: "Bangalore",
        state: "karnataka",
        location: "Bengaluru, Karnataka",
        description: "Garden City and IT hub with beautiful parks, palaces, and vibrant nightlife.",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.6
    },
    {
        id: 24,
        name: "Mysore",
        state: "karnataka",
        location: "Mysuru, Karnataka",
        description: "City of Palaces with Mysore Palace, Chamundi Hills, and Dasara festival.",
        price: "₹1,800",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.8
    },
    {
        id: 25,
        name: "Hampi",
        state: "karnataka",
        location: "Vijayanagara District, Karnataka",
        description: "UNESCO World Heritage site with ancient ruins of Vijayanagara Empire.",
        price: "₹1,600",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.9
    },
    {
        id: 26,
        name: "Coorg",
        state: "karnataka",
        location: "Kodagu District, Karnataka",
        description: "Scotland of India with coffee plantations, waterfalls, and misty mountains.",
        price: "₹2,500",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.8
    },
    {
        id: 27,
        name: "Gokarna",
        state: "karnataka",
        location: "Uttara Kannada, Karnataka",
        description: "Beach paradise with pristine beaches, ancient temples, and laid-back vibe.",
        price: "₹1,800",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 28,
        name: "Chikmagalur",
        state: "karnataka",
        location: "Chikmagalur District, Karnataka",
        description: "Coffee land with Mullayanagiri peak, coffee estates, and scenic beauty.",
        price: "₹2,200",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 29,
        name: "Udupi",
        state: "karnataka",
        location: "Udupi District, Karnataka",
        description: "Temple town famous for Udupi Krishna Temple and delicious vegetarian cuisine.",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.5
    },
    {
        id: 30,
        name: "Badami",
        state: "karnataka",
        location: "Bagalkot District, Karnataka",
        description: "Ancient cave temples with rock-cut architecture from the Chalukya dynasty.",
        price: "₹1,400",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.6
    },
    {
        id: 31,
        name: "Belur",
        state: "karnataka",
        location: "Hassan District, Karnataka",
        description: "Famous for Chennakesava Temple, a masterpiece of Hoysala architecture.",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    },
    {
        id: 32,
        name: "Halebidu",
        state: "karnataka",
        location: "Hassan District, Karnataka",
        description: "Ancient capital with Hoysaleswara Temple, showcasing intricate stone carvings.",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.6
    },
    {
        id: 33,
        name: "Jog Falls",
        state: "karnataka",
        location: "Shimoga District, Karnataka",
        description: "Highest waterfall in India, creating a spectacular natural wonder.",
        price: "₹1,600",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        rating: 4.7
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load destinations
    if (document.getElementById('destinationsGrid')) {
        displayDestinations('all');
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayDestinations(filter);
        });
    });

    // State cards click
    const stateCards = document.querySelectorAll('.state-card');
    stateCards.forEach(card => {
        card.addEventListener('click', function() {
            const state = this.getAttribute('data-state');
            filterButtons.forEach(b => b.classList.remove('active'));
            document.querySelector(`[data-filter="${state}"]`).classList.add('active');
            displayDestinations(state);
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Check if user is logged in
    checkLoginStatus();
});

// Display destinations
function displayDestinations(filter = 'all') {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    let filteredPlaces = tourismPlaces;
    
    if (filter !== 'all') {
        filteredPlaces = tourismPlaces.filter(place => place.state === filter);
    }

    grid.innerHTML = filteredPlaces.map(place => `
        <div class="destination-card">
            <div class="destination-image" style="background-image: url('${place.image}')">
                <div class="destination-badge">${place.state.toUpperCase()}</div>
            </div>
            <div class="destination-content">
                <h3>${place.name}</h3>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${place.location}
                </div>
                <p class="destination-description">${place.description}</p>
                <div class="destination-footer">
                    <div class="destination-price">${place.price}/night</div>
                    <a href="booking.html?destination=${encodeURIComponent(place.name)}" class="btn-book">Book Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayDestinations('all');
        return;
    }

    const filteredPlaces = tourismPlaces.filter(place => 
        place.name.toLowerCase().includes(searchTerm) ||
        place.location.toLowerCase().includes(searchTerm) ||
        place.description.toLowerCase().includes(searchTerm) ||
        place.state.toLowerCase().includes(searchTerm)
    );

    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    if (filteredPlaces.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No destinations found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredPlaces.map(place => `
        <div class="destination-card">
            <div class="destination-image" style="background-image: url('${place.image}')">
                <div class="destination-badge">${place.state.toUpperCase()}</div>
            </div>
            <div class="destination-content">
                <h3>${place.name}</h3>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${place.location}
                </div>
                <p class="destination-description">${place.description}</p>
                <div class="destination-footer">
                    <div class="destination-price">${place.price}/night</div>
                    <a href="booking.html?destination=${encodeURIComponent(place.name)}" class="btn-book">Book Now</a>
                </div>
            </div>
        </div>
    `).join('');

    // Scroll to destinations section
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Pre-fill destination in booking form if coming from a link
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');
    if (destination && document.getElementById('destination')) {
        document.getElementById('destination').value = destination;
    }
});

// Check login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (isLoggedIn === 'true' && userEmail) {
        const loginLinks = document.querySelectorAll('.btn-login');
        loginLinks.forEach(link => {
            link.textContent = userEmail.split('@')[0];
            link.href = '#';
            link.onclick = function(e) {
                e.preventDefault();
                if (confirm('Do you want to logout?')) {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('userEmail');
                    window.location.reload();
                }
            };
        });
    }
}

// Footer filter links
document.addEventListener('DOMContentLoaded', function() {
    const footerFilterLinks = document.querySelectorAll('.footer-section a[data-filter]');
    footerFilterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            window.location.href = `index.html#destinations`;
            setTimeout(() => {
                const filterBtn = document.querySelector(`[data-filter="${filter}"]`);
                if (filterBtn) {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    filterBtn.classList.add('active');
                    displayDestinations(filter);
                }
            }, 100);
        });
    });
});

