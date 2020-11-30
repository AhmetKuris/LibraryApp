using System;

namespace Web.Entities
{
    public class Book
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public int Page { get; set; }

        public DateTime PublishDate { get; set; }

        public Author Author { get; set; }
    }
}
