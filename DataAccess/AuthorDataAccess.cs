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

        public IList<Author>  GetAuthors()
        {
          return  _context.Authors.ToList();
        }

        public void AddAuthor(Author author)
        {
             _context.Authors.Add(author);
        }
        public void UpdateAuthor(Author author)
        {
             _context.Authors.Update(author);
        }
        public void DeleteAuthor(Author author)
        {
             _context.Authors.Remove(author);
        }
    }
}
