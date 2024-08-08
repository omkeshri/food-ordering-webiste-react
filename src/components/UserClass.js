// import React from "react";
// import UserContext from "../util/UserContext";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 1,

//       userInfo: {
//         name: "om",
//         location: "us",
//         avatar_url: "http://dummy-photo.com",
//       },
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/omkeshri");
//     const json = await data.json();
//     // console.log(json)

//     this.setState({
//       userInfo: json,
//     });
//   }

//   componentDidUpdate() {
//     console.log("component did update");
//   }

//   componentWillUnmount() {
//     console.log("component will unmount");
//   }

//   render() {
//     // const { name, location } = this.props;
//     const { name, location, avatar_url } = this.state.userInfo;
//     return (
//       <div className="user-card">
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Count Increase
//         </button>
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <img src={avatar_url}></img>

//         <UserContext.Consumer>
//           {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }

// export default UserClass;
