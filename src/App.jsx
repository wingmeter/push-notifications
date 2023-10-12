import './App.css';

function App() {
  navigator.serviceWorker.register("service-worker.js");

  function showNotification() {
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification("Vibration Sample", {
            body: "Buzz! Buzz!",
            icon: "../images/touch/chrome-touch-icon-192x192.png",
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: "vibration-sample",
          });
        });
      }
    });
  }

  // const subscribe = async () => {
  //   try {

  //     Notification.requestPermission().then(perm => {
  //       if (perm === "granted") {
  //         new Notification("Example notification", {
  //           body: "This is more text"
  //         })
  //       }
  //     })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="App">
      <h1>Пример уведомлений</h1>
      <button onClick={showNotification}>Подписаться на уведомления</button>
    </div>
  );
}

export default App;
