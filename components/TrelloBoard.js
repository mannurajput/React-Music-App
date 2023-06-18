import React from "react";
// import { connect } from "react-redux";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import shortid from "shortid";
import CardList from "./CardList";
import Navbar from "./Navbar";

const data = [
  {
    title: "Title 1",
    description:
      "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    cardId: shortid.generate(),
  },
  {
    title: "Title 2",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    cardId: shortid.generate(),
  },
  {
    title: "Title 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    cardId: shortid.generate(),
  },
  {
    title: "Title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    cardId: shortid.generate(),
  },
  {
    title: "Title 44",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    cardId: shortid.generate(),
  },
];

class TrelloBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data, filteredData: data, searchValue: "" };
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  handleSearch = (e) => {
    // console.log(e.target.value);
    const search = e.target.value;
    var newData = this.state.data.filter((item) => {
      if (search === "") return item;
      else if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
      return null;
    });
    this.setState({
      ...this.state,
      filteredData: newData,
      searchValue: search,
    });
  };
  clearSearch = () => {
    this.setState({
      ...this.state,
      searchValue: "",
      filteredData: this.state.data,
    });
  };
  render() {
    return (
      /*Can start Coding from Here*/
      <div>
        <Navbar
          handleSearch={this.handleSearch}
          clearSearch={this.clearSearch}
          searchValue={this.state.searchValue}
        />
        <CardList data={this.state.filteredData} />
      </div>
    );
  }
}

export default TrelloBoard;
