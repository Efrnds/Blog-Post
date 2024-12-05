export default function Login(setIsLogin) {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "1234").then(() => {
      setIsLogin(true);
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
