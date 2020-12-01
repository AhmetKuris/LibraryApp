using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.DataAccess;
using Web.DTOs;
using Web.Entities;

namespace Web.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class LibraryController : ControllerBase
    {

        private readonly BookDataAccess _bookDataAccess;
        private readonly AuthorDataAccess _authorDataAccess;

        public LibraryController(BookDataAccess bookDataAccess, AuthorDataAccess authorDataAccess)
        {
            _bookDataAccess = bookDataAccess;
            _authorDataAccess = authorDataAccess;
        }

        [HttpGet]
        public IEnumerable<Book> GetLibrary()
        {
            return _bookDataAccess.GetBooks().ToArray();
        }

        [HttpGet]
        [Route("author")]
        public IEnumerable<Author> GetAuthorsy()
        {
            return _authorDataAccess.GetAuthors().ToArray();
        }

        [HttpPost]
        [Route("book")]
        public IActionResult AddBook(BookDto bookDto)
        {
            try
            {
                var author = _authorDataAccess.Get().FirstOrDefault(a => a.FullName == bookDto.Author);

                if (author is null)
                {
                    throw new Exception("Author could not be found");
                }

                _bookDataAccess.AddBook(new Book
                {
                    Author = author,
                    Page = bookDto.Page,
                    Title = bookDto.Title,
                    PublishDate = DateTime.Now
                });

                return Ok();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("author")]
        public IActionResult AddAuthor(AuthorDto authorDto)
        {
            try
            {
                _authorDataAccess.AddAuthor(new Author
                {
                    FullName = authorDto.FirstName + " " + authorDto.LastName
                });
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
