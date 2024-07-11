fetch('https://pythonfastapi-fawn.vercel.app/', {
    "method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": "*"
    }
  })
  .then(response => response.json())
  .then(data => {
    const imagesContainer = document.getElementById(`images-container`);
    data.forEach(stock => {
        const image = document.createElement('img')
        image.src = stock['path']
        imagesContainer.appendChild(image)
    });
  })