using Microsoft.EntityFrameworkCore;
using Web.Entities;

namespace Web.DataAccess
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {

        }
     
        public DbSet<Book> Books { get; set; }

        public DbSet<Author> Authors { get; set; }
    }
}
