// Promise
fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    console.log("data", data);
  }).catch((err) => {
    console.log("err", err);
  });
  
  // Async Await
  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }