using System.Collections.Generic;
using System.Linq;
using Web.Entities;

namespace Web.DataAccess
{
    public class AuthorDataAccess
    {
        private readonly ApplicationContext _context;

        public AuthorDataAccess(ApplicationContext context)
        {
            _context = context;
        }

        public IEnumerable<Author>  GetAuthors()
        {
          return  _context.Authors.AsEnumerable();
        }

        public IQueryable<Author> Get()
        {
          return  _context.Authors.AsQueryable();
        }

        public void AddAuthor(Author author)
        {
             _context.Authors.Add(author);
             _context.SaveChanges();

        }
        public void UpdateAuthor(Author author)
        {
             _context.Authors.Update(author);
             _context.SaveChanges();

        }
        public void DeleteAuthor(Author author)
        {
             _context.Authors.Remove(author);
             _context.SaveChanges();
        }
    }
}
