# TourMate - South India Tourism Web Application

A beautiful and modern web application for exploring and booking tourism destinations in Tamil Nadu, Kerala, and Karnataka.

## Features

- 🏞️ **33+ Tourism Destinations** - Curated list of best places across three states
- 🔍 **Advanced Search** - Search destinations by name, location, or description
- 📅 **Booking System** - Complete booking form with date selection and payment options
- 👤 **User Authentication** - Login page with social login options
- 📧 **Contact Form** - Get in touch with the team
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful, clean, and user-friendly interface

## States Covered

### Tamil Nadu (12 Destinations)
- Ooty, Kodaikanal, Mahabalipuram, Madurai, Rameswaram, Kanyakumari, Thanjavur, Pondicherry, Kanchipuram, Coimbatore, Yercaud, Kumbakonam

### Kerala (10 Destinations)
- Munnar, Alleppey, Kochi, Wayanad, Thekkady, Kovalam, Varkala, Kumarakom, Thiruvananthapuram, Idukki

### Karnataka (11 Destinations)
- Bangalore, Mysore, Hampi, Coorg, Gokarna, Chikmagalur, Udupi, Badami, Belur, Halebidu, Jog Falls

## Pages

1. **Home Page (index.html)** - Featured destinations, search functionality, state-wise browsing
2. **Login Page (login.html)** - User authentication with email/password and social login
3. **Booking Page (booking.html)** - Complete booking form with destination selection, dates, and payment
4. **Contact Page (contact.html)** - Contact form and business information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla JS)
- Node.js (Express) - Backend API server
- SQLite - Database for persistent storage
- Font Awesome Icons
- Google Maps Embed

## Getting Started

### With Database Server (recommended)

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open http://localhost:3000 in your browser

### Static-only (no database)

1. Open `index.html` in a browser (login/register/bookings/contact will show connection errors without the server)

## Features in Detail

### Search Functionality
- Real-time search across all destinations
- Search by destination name, location, state, or description
- Instant results with smooth scrolling

### Booking System
- Select from 33+ destinations
- Choose check-in and check-out dates
- Select number of adults and children
- Fill personal information
- Choose payment method
- View booking summary with calculated total
- All bookings saved to browser localStorage

### User Authentication
- Email/password login
- Remember me functionality
- Password visibility toggle
- Social login options (UI ready)
- Session management with localStorage

### Contact Form
- Name, email, phone, and message fields
- Subject categorization
- Form validation
- Messages saved to localStorage

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Database & Storage

When running with the server (`npm start`), data is stored in SQLite (`tourmate.db`):

- **Users** - Registration and login (passwords hashed with bcrypt)
- **Bookings** - Trip reservations with destination, dates, guest info
- **Contact messages** - Inquiries from the contact form

Browser localStorage is used only for login session (isLoggedIn, userEmail).

## Future Enhancements

- Payment gateway integration
- Email notifications
- User registration
- Reviews and ratings system
- Image gallery for each destination
- Weather information
- Travel guides and tips

## License

This project is open source and available for educational purposes.

## Contact

For any queries or support, use the contact form on the website or email: info@tourmate.com

---

**Enjoy exploring South India with TourMate! 🗺️✈️**

