import React from "react";
import '../Header.css';

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img
                    src="https://edugate.vn/wp-content/uploads/2021/09/cach-chen-link-vao-bai-viet.jpg"
                    width="200px"
                    alt="100"
                    height="50px"
                    style={{
                        marginLeft: "2%"
                    }} />
                <div class="collapse navbar-collapse" id="navbarNavDropdown"
                    style={{
                        display: "flex",
                        alignItems: "right",
                        justifyContent: "right"
                    }}>
                    <ul class="navbar-nav">
                        <li class="nav-item active" >
                            <a class="nav-link" href="/home">Trang chủ</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/introduction">Giới thiệu</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/news">Tin tức</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/testexam">Dự thi</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contact">Liên hệ</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/profile">Cá nhân</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/login">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
