using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.DataAccess;
using Web.Entities;

namespace Web.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class LibraryController : ControllerBase
    {

        private readonly BookDataAccess _bookDataAccess;

        public LibraryController( BookDataAccess bookDataAccess)
        {
            _bookDataAccess = bookDataAccess;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _bookDataAccess.GetBooks().ToArray();
        }
    }
}
