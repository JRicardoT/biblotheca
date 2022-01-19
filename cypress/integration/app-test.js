describe('Main page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  });

  it('should display the main page', () => {
    cy.get('nav').contains('Bibliotheca')
  });

  it('display a list of books upon visiting main page', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-nonfiction.json?api-key=M4w0uEsAYWmqh4MueC7oRCv9eOIZbkkU', {
      results: [
        {
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Lets-Explore-Diabetes-David-Sedaris/dp/0316154709?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "asterisk": 0,
          "author": "David Sedaris",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316125680.jpg",
          "book_image_height": 193,
          "book_image_width": 128,
          "book_review_link": "https://www.nytimes.com/2013/05/15/books/lets-explore-diabetes-with-owls-by-david-sedaris.html",
          "book_uri": "nyt://book/a754eee3-4227-58c9-a48a-d5e6091d8e61",
          "buy_links": [],
          "contributor": "by David Sedaris",
          "contributor_note": "",
          "dagger": 0,
          "description": "A humorist returns with more wry takes on contemporary life.",
          "first_chapter_link": "",
          "isbns": [],
          "price": "0.00",
          "primary_isbn10": "0316154695",
          "primary_isbn13": "9780316154697",
          "publisher": "Little, Brown",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "https://www.nytimes.com/2013/05/19/books/review/lets-explore-diabetes-with-owls-by-david-sedaris.html",
          "title": "LET'S EXPLORE DIABETES WITH OWLS",
          "weeks_on_list": 0
        },
        {
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Lean-In-Women-Work-Will-ebook/dp/B009LMTDL0?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "asterisk": 0,
          "author": "Sheryl Sandberg with Nell Scovell",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385349956.jpg",
          "book_image_height": 495,
          "book_image_width": 300,
          "book_review_link": "https://www.nytimes.com/2013/03/07/books/sheryl-sandbergs-lean-in.html",
          "book_uri": "nyt://book/f2b4dcdf-be70-5858-b6b1-333139743187",
          "buy_links": [{}, {}, {}, {}, {}, {}],
          "contributor": "by Sheryl Sandberg with Nell Scovell",
          "contributor_note": "",
          "dagger": 0,
          "description": "The chief operating officer of Facebook urges women to pursue their careers without ambivalence.",
          "first_chapter_link": "",
          "isbns": [{}, {}, {}],
          "price": "0.00",
          "primary_isbn10": "0385349947",
          "primary_isbn13": "9780385349949",
          "publisher": "Knopf",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "https://www.nytimes.com/2013/03/10/books/review/sheryl-sandbergs-lean-in.html",
          "title": "LEAN IN",
          "weeks_on_list": 0
        }
      ]
    })
  });

  it('should go to details page when a book cover is clicked', () => {
    cy.get('.book-cover').first().click()
  });

  it('should display book details when in book details page', () => {
    cy.get('.book-details').contains('LET\'S EXPLORE DIABETES WITH OWLS')
  });

  it('should display a new list of books when a category is clicked', () => {
    cy.get('#non-fiction').click()
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=M4w0uEsAYWmqh4MueC7oRCv9eOIZbkkU', {
      results: [
        {
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0063209780?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "asterisk": 0,
          "author": "Jamie Raskin",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063209787.jpg",
          "book_image_height": 500,
          "book_image_width": 329,
          "book_review_link": "",
          "book_uri": "nyt://book/3d464733-2e01-5c6a-bfe5-9b47461d662b",
          "buy_links": [{}, {}, {}, {}, {}, {}],
          "contributor": "by Jamie Raskin",
          "contributor_note": "",
          "dagger": 0,
          "description": "The Maryland congressman describes leading the impeachment effort against the former president shortly after his son’s death by suicide and the insurrection at the Capitol.",
          "first_chapter_link": "",
          "isbns": [{}, {}],
          "price": "0.00",
          "primary_isbn10": "0063209780",
          "primary_isbn13": "9780063209787",
          "publisher": "Harper",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "UNTHINKABLE",
          "weeks_on_list": 1
        },
        {
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "asterisk": 0,
          "author": "Bessel van der Kolk",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
          "book_image_height": 193,
          "book_image_width": 128,
          "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
          "book_uri": "nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e",
          "buy_links": [{}, {}, {}, {}, {}, {}],
          "contributor": "by Bessel van der Kolk",
          "contributor_note": "",
          "dagger": 0,
          "description": "How trauma affects the body and mind, and innovative treatments for recovery.",
          "first_chapter_link": "",
          "isbns": [{}, {}, {}],
          "price": "0.00",
          "primary_isbn10": "0143127748",
          "primary_isbn13": "9780143127741",
          "publisher": "Penguin",
          "rank": 2,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "THE BODY KEEPS THE SCORE",
          "weeks_on_list": 72
        }
      ]
    })
  });

  it('should add books to favorites', () => {
    cy.contains('Add to Favorites').click();
    cy.get('#favoriteBooks').click();
    cy.get('.favorite-books-container');
    cy.get('h2').contains('LET\'S EXPLORE DIABETES WITH OWLS')
  })

  it('should remove a book from favorites', () => {
    cy.contains('Remove').first().click();
  })
})