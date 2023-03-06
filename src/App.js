import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  /*
    componentDidMount()

    - life cycle : Mounting < Component
    - operation : fetching data
  */
  componentDidMount() {
    setTimeout(() => {
      // state를 추가하는 것도 자유임.
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading" : "We are ready"}</div>
    );
  }
}

export default App;
