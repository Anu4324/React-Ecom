export async function createData(payload) {
  var response = await fetch("/cart", {
    method: "post",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
    body: JSON.stringify(payload),
  }); 
  return await response.json();
}

export async function getData() {
  var response = await fetch("/cart", {
    method: "get",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
  });
  return await response.json();
}

export async function updateData(payload) {
  var response = await fetch("/cart/" + payload.id, {
    method: "put",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteData(payload) {
  var response = await fetch("/cart/" + payload.id, {
    method: "delete",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
  });
  return await response.json();
}
