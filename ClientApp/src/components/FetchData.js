import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { books: [], loading: true };
  }

  componentDidMount() {
      this.populateBookData();
  }

  static renderBooksTable(books) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Page</th>
            <th>Author Id</th>
            <th>Author Full Name</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
              <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.page}</td>
                  <td>{book.author.id}</td>
                  <td>{book.author.fullName}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderBooksTable(this.state.books);

    return (
      <div>
        <h1 id="tabelLabel" >Library</h1>
        <p>Here is a list of all of our books.</p>
        {contents}
      </div>
    );
  }

  async populateBookData() {
    const response = await fetch('library');
      const data = await response.json();
      console.log(data);
    this.setState({ books: data, loading: false });
  }
}
