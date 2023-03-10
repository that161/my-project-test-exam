import React from "react";
import { ToastContainer } from "react-toastify";
//import $ from "jquery";
import { useCallback, useState } from "react";
// import { Link, useHref, useNavigate } from "react-router-dom";

import "./Account.css"



// const notify_incorrect_username_password = () => {
//     toast("Wrong username or password!!!", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     });
// }

// const notify_field_username = () => {
//     toast("Please enter your username!!!", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     });
// }

// const notify_field_password = () => {
//     toast("Please enter your password!!!", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     });
// }

function SignIn() {
    const [userName, setUsername] = useState("");

    //const [password, setPassword] = useState("");

    //const navigate = useNavigate();

    const onUsernameChange = useCallback((e) => {
        setUsername(e.target.value);
    }, []);

    // const onPasswordChange = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    // async function login() {
    //     let item = { username: userName, password: password };
    //     fetch("https://ebook4u-server.onrender.com/auth/login", {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify(item),
    //     })
    //         .then(async (res) => {
    //             const data = await res.json();
    //             if (data.success) {
    //                 localStorage.setItem("user", data.accessToken);
    //                 if (data?.admin) navigate("/admin");
    //                 else navigate("/home");
    //             } else {
    //                 notify_incorrect_username_password();
    //             }
    //         })
    //         .catch((e) => { });
    // }

    return (

        <>
            <div className="bg_image">
                <ToastContainer />

                <div className="box">
                    <center>
                        <h2>Qu??n m???t kh???u</h2>
                        <div>
                            <input
                                id="inputLoginName"
                                placeholder="Email"
                                type="text"
                                name="name"
                                style={{
                                    marginTop: "5px",
                                    width: "250px",
                                    height: "40px",
                                }}
                                required
                                value={userName}
                                onChange={onUsernameChange}
                            />
                        </div>

                        <div>
                            <input
                                id="inputPhone"
                                placeholder="S??? ??i???n tho???i"
                                type="text"
                                name="name"
                                style={{
                                    marginTop: "5px",
                                    width: "250px",
                                    height: "40px",
                                }}
                            // required
                            // value={userName}
                            // onChange={onUsernameChange}
                            />
                        </div>

                        <div>
                            <input
                                type="submit"
                                style={{
                                    marginTop: "10px",
                                }}
                                value="Nh???n m???t kh???u m???i" />
                        </div>
                        <div
                            style={{
                                marginTop: "2px",
                                //marginLeft: "-25%",
                            }}>
                            ???? c?? t??i kho???n
                        </div>
                        <div
                            style={{
                                marginTop: "2px",
                                //marginLeft: "-25%",
                            }}
                        >
                            <a className="link" href="/login/signin">
                                ????ng nh???p
                            </a>
                        </div>
                    </center>
                </div >
            </div >
        </>
    );
}

export default SignIn;
