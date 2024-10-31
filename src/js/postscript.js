window.onload = function() {



    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (const singlePost of json) {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                const posth3 = document.createElement('h3');
                const postp = document.createElement('p');
                //set the content of the title tag
                posth3.innerHTML = singlePost.title;
                //set content of p tag
                postp.innerHTML = singlePost.body;
                postDiv.appendChild(posth3);
                postDiv.appendChild(postp);

                document.body.appendChild(postDiv);
            }
            
            }).catch(err => {
                let errDiv = document.createElement("div");
                errDiv.className = 'post';
                errDiv.innerText = err;
                document.body.appendChild(errDiv);
                }).finally(() => {
                    let footer = document.createElement("footer");
                    date = new Date().toLocaleString()
                    footer.innerText = date;
                    document.body.appendChild(footer);
                    });
        
        }
    

    
// create loop for this:
// create h3
//create p
//create div
//add h3,p to div
//add div to body