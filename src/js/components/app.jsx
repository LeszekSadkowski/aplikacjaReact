// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Client extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             surname: '',
//             city: '',
//             street: '',
//             streetNbr: '',
//             email: '',
//             phoneNbr: ''
//
//         }
//
//     }
//
//     submit = {}
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.submit}>
//                     <div>
//                         <label>Imie
//                             <input type="text" name='name'
//                                    value={this.state.name}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label>Nazwisko
//                             <input type="text" name='surname'
//                                    value={this.state.surname}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label>Miejscowość
//                             <input type="adres" name='city'
//                                    value={this.state.city}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label>Ulica
//                             <input type="adres" name='street'
//                                    value={this.state.street}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label> nr domu
//                             <input type="adres" name='streetNbr'
//                                    value={this.state.streetNbr}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label>telefon
//                             <input type="phone" name='phoneNbr'
//                                    value={this.state.phoneNbr}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label> email
//                             <input type="email" name='email'
//                                    value={this.state.email}
//                                    onChange={this.handleChange}
//                             />
//                         </label>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//         return (
//             <div>
//                 <Client/>
//                 {/*<outData/>*/}
//             </div>
//         )
//     }
// }
//
//
// document.addEventListener('DOMContentLoaded', function () {
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('app')
//     );
// });
//
