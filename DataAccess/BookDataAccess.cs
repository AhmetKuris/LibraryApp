using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Web.Entities;

namespace Web.DataAccess
{
    public class BookDataAccess
    {
        private readonly ApplicationContext _context;

        public BookDataAccess(ApplicationContext context)
        {
            _context = context;
        }

        public IEnumerable<Book> GetBooks()
        {
            return _context.Books.Include(b=>b.Author).AsEnumerable();
        }

        public void AddBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
        }
        public void UpdateBook(Book book)
        {
            _context.Books.Update(book);
            _context.SaveChanges();

        }
        public void DeleteBook(Book book)
        {
            _context.Books.Remove(book);
            _context.SaveChanges();

        }
    }
}
