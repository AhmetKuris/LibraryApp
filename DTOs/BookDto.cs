using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.DTOs
{
    public class BookDto
    {

        [Required]
        public string Title { get; set; }

        [Required]
        public int Page { get; set; }

        [Required]
        public DateTime PublishDate { get; set; }

        [Required]
        public int AuthorId { get; set; }

    }
}
