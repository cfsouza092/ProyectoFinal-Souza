fetch("../salones.json")
.then ((response) => response.json())
.then ((data) => console.log(data));