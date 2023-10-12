import './App.css';

function App() {

  const subscribe = async () => {
    try {
      Notification.requestPermission().then(perm => {
        if (perm === "granted") {
          new Notification("Example notification", {
            body: "This is more text"
          })
        }
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Пример уведомлений</h1>
      <button onClick={subscribe}>Подписаться на уведомления</button>
    </div>
  );
}

export default App;
