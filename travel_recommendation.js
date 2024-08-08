const resultDiv = document.getElementById('result');    
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('reset');

function searchCondition() {
    let input = document.getElementById('searchInput').value.toLowerCase();

    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            if (input === "beach" || input === "beaches") {
                input = "beaches";
            } else if (input === "temple" || input === "temples") {
                input = "temples";
            } else if (input === "country" || input === "countries") {
                input = "countries";
            }
            
            const search = Object.keys(data).find(item => item.toLowerCase() === input);
            
            if (search === "countries") {
                for (const country of data[search]) { 
                    for(const city of country.cities) { 
                        //console.log(city);     
                        resultDiv.innerHTML += `<h2 class="result">${city.name}</h2>`;
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.description}">`;
                        resultDiv.innerHTML += `<p class="result"><strong>${city.description}</strong></p>`;
                        resultDiv.innerHTML += `<br>`;
                    }
                }
            }
        
            for (const item of data[search]) {        
                resultDiv.innerHTML += `<h2 class="result">${item.name}</h2>`;
                resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="${item.description}">`;
                resultDiv.innerHTML += `<p class="result"><strong>${item.description}</strong></p>`;
                resultDiv.innerHTML += `<br>`;
            }            
        })   
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);

function reset() {
    resultDiv.innerHTML = '';
}

btnClear.addEventListener('click', reset);