              // Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" },
    {startDate},
    {endDate}

  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search parameters:
    this.props.setTerm(this.state.search);
    this.props.setTerm(this.state.startDate);
    this.props.setTerm(this.state.endDate);

    this.setState({ search: "" });
    this.setState({ startDate: "" });
    this.setState({ endDate: "" });
  },

  // Here we describe this component's render method
  render: function() {
    return (
<div>

                      <div className="panel-body text-center">
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <h4 className="">
                              <strong>Location</strong>
                            </h4>

                            <input
                              value={this.state.search}
                              type="text"
                              className="form-control text-center"
                              id="search"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                              <input
                              value={this.state.startDate}
                              type="text"
                              className="form-control text-center"
                              id="startDate"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                              <input
                              value={this.state.endDate}
                              type="text"
                              className="form-control text-center"
                              id="endDate"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                            <button
                              className="btn btn-primary"
                              type="submit">
                              Submit
                            </button>
                            </div>
                          </form>
                        </div>
      
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
