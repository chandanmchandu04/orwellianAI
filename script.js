const btn = document.getElementById("btn");
const output_scan = document.querySelector(".output");
let ScreenShot, data, message;
btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  //   event.target.reset();
  $('body').waitMe();
  const url = document.getElementById("url").value;
  const encodedUrl = encodeURIComponent(url);
  console.log(encodedUrl);
  document.getElementById("url").value = "";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEwMTVjNGQ5YzM3YzRkNGRiZDg5NjYiLCJpYXQiOjE2OTU1NTQ1NzQsImV4cCI6MTY5NjE1OTM3NH0.IKetX06cC2NQuqHkV2JIZSOk5C0lfvzh1u_8QO9CYMs";
//   render();


  const requestOptions = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url,
    }),
  };

  $('body').waitMe('hide');
  const calldata = async () => {
      const fetch_data = await fetch(
        "https://orwellian-ai.onrender.com/check/url-check",
        requestOptions
      );
      const response = await fetch_data.json();
      ScreenShot = response.ss;
      data = response.urlInfo;
      message = response.ml
      console.log(ScreenShot)
      console.log(data)
      console.log(message)

//   request.send();
//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
    

    const results_url = `
    <table class="table table-striped ">
        <tr class="light">
            <td>ML Predict: <span id="">${message}</span></td>
        </tr>
        <tr>
            <td>Domain: <span>${data.domain}</span></td>
        </tr>
        
        
        <tr>
            <td>Category: <span>${data.category}</span></td>
        </tr>
        <tr>
            <td>Risk Score:<span>${data.risk_score}</span></td>
        </tr>
        
        
        <tr>
            <td>Suspicious: <span>${data.suspicious}</span></td>
        </tr>
        <tr>
            <td>IP Address: <span>${data.ip_address}</span></td>
        </tr>
        
       
        <tr>
            <td>HTTP Status Code: <span>${data.status_code}</span></td>
        </tr>
        <tr>
            <td>Web Server: <span>${data.server}</span></td>
        </tr>
        <tr>
            <td>Domain Age: <span>${data.domain_age.human}</span></td>
        </tr>
        <tr>
            <td>Adult: <span>${data.adult}</span></td>
        </tr>

        
        
        <tr style="padding: 20px 5%; ">
            <image src="${ScreenShot}" style="width: 100%; height: 200px;" />
        </tr>
    </tbody>
</table>`;

    $("#results").html(results_url);
    $("#modalopen").modal("show");
   
}
calldata();
  });


