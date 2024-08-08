export async function createData(payload) {
  var response = await fetch("/newslatter", {
    method: "post",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function getData() {
  var response = await fetch("/newslatter", {
    method: "get",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
  });
  return await response.json();
}

export async function updateData(payload) {
  var response = await fetch("/newslatter/" + payload.id, {
    method: "put",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteData(payload) {
  var response = await fetch("/newslatter/" + payload.id, {
    method: "delete",
    headers: {
      "content-type": "application/json", // Corrected header name
    },
  });
  return await response.json();
}
