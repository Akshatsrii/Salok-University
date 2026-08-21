import React from "react";
import "../styles/library.css";

const Library = () => {

  const books = [
    {
      title: "Data Structures & Algorithms",
      author: "Mark Lewis",
      status: "Available",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Operating Systems Concepts",
      author: "Silberschatz",
      status: "Available",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Database Management Systems",
      author: "Navathe",
      status: "Unavailable",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Python Crash Course",
      author: "Eric Matthes",
      status: "Available",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      status: "Available",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "Available",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Computer Networks",
      author: "Andrew Tanenbaum",
      status: "Unavailable",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow",
      status: "Available",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <main className="library-page">

      {/* ================= HEADER ================= */}
      <section className="library-header">
        <h1>University Central Library</h1>
        <p>
          Access thousands of books, journals, research papers,
          digital learning materials and academic resources.
        </p>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="library-search-section">
        <input
          type="text"
          placeholder="Search books, authors, subjects..."
          className="library-search-input"
        />
        <button className="btn primary-btn">Search</button>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="library-categories">
        <h2>Book Categories</h2>
        <div className="category-grid">
          <div className="category-card">📘 Computer Science</div>
          <div className="category-card">📊 Management</div>
          <div className="category-card">💰 Finance</div>
          <div className="category-card">📚 Literature</div>
          <div className="category-card">🧠 Artificial Intelligence</div>
          <div className="category-card">📡 Networking</div>
        </div>
      </section>

      {/* ================= BOOKS GRID ================= */}
      <section className="books-section">
        <h2>Available Books</h2>

        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <span className={book.status === "Available" ? "available" : "unavailable"}>
                {book.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= E-RESOURCES ================= */}
      <section className="library-resources-section">
        <h2>Digital Resources</h2>
        <ul>
          <li>🌐 Access to 10,000+ E-Books</li>
          <li>📑 IEEE, Springer & Elsevier Journals</li>
          <li>🎥 Online Video Lectures & Tutorials</li>
          <li>📰 Research Databases & Publications</li>
        </ul>
      </section>

      {/* ================= TIMINGS ================= */}
      <section className="library-timings">
        <h2>Library Timings</h2>
        <p>Monday - Friday: 8:00 AM – 8:00 PM</p>
        <p>Saturday: 9:00 AM – 5:00 PM</p>
        <p>Sunday: Closed</p>
      </section>

      {/* ================= RULES ================= */}
      <section className="library-rules-section">
        <h2>Library Rules</h2>
        <ul className="library-rules">
          <li>Maintain silence inside the library.</li>
          <li>Keep your mobile phones on silent mode.</li>
          <li>Return issued books on time.</li>
          <li>Handle books and materials with care.</li>
          <li>Carry your university ID card.</li>
          <li>No food or drinks allowed inside the library.</li>
        </ul>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="library-membership">
        <h2>Library Membership</h2>
        <p>
          All enrolled students and faculty members are eligible
          for library membership. Students can issue up to 4 books
          at a time for 14 days.
        </p>
      </section>

    </main>
  );
};

export default Library;
