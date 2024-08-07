function searchCondition() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            const search = data.countries.find(item => item.name.toLowerCase() === input);
        })
}