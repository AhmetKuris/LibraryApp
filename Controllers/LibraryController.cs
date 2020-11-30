using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.Entities;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LibraryController : ControllerBase
    {
        private static readonly string[] Titles = new[]
        {
            "Some Book Title", "Another Book Title", "What is a title?", "TITLE"
        };
        private static readonly Author[] Authors = new[]
        {
            new Author
            {
                Id = Guid.NewGuid(),
                FullName = "Mr. Awesome"
            }, 
            new Author
            {
                Id = Guid.NewGuid(),
                FullName = "Ms. Perfect"
            }, 
            new Author
            {
                Id = Guid.NewGuid(),
                FullName = "Mrs. Sunshine"
            }
        };

        private readonly ILogger<LibraryController> _logger;

        public LibraryController(ILogger<LibraryController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Book
            {
                Id = Guid.NewGuid(),
                PublishDate = DateTime.Now.AddDays(index),
                Page= rng.Next(10, 1000),
                Title = Titles[rng.Next(Titles.Length)],
                Author = Authors[rng.Next(Authors.Length)]
            })
            .ToArray();
        }
    }
}
